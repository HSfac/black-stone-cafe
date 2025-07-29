-- 블랙스톤 카페 데이터베이스 스키마

-- 메뉴 테이블
CREATE TABLE menus (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price INTEGER NOT NULL, -- 원 단위 (100원 = 100)
  image_url TEXT,
  category VARCHAR(100) NOT NULL, -- 'coffee', 'beverage', 'dessert', 'food'
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 주문 테이블
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  pickup_time TIMESTAMP WITH TIME ZONE NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'preparing', 'ready', 'completed', 'cancelled')),
  total_amount INTEGER NOT NULL, -- 원 단위
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 주문 아이템 테이블
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  menu_id UUID REFERENCES menus(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price INTEGER NOT NULL,
  options JSONB, -- 사이즈, 샷 추가 등의 옵션
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX idx_menus_category ON menus(category);
CREATE INDEX idx_menus_available ON menus(is_available);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_pickup_time ON orders(pickup_time);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- 업데이트 트리거 생성
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_menus_updated_at
  BEFORE UPDATE ON menus
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- 샘플 데이터 삽입

-- 커피 메뉴
INSERT INTO menus (name, description, price, category, image_url) VALUES
('아메리카노', '깔끔하고 진한 에스프레소의 맛을 느낄 수 있는 클래식 커피', 4500, 'coffee', '/images/americano.jpg'),
('카페라떼', '부드러운 우유와 에스프레소의 조화', 5000, 'coffee', '/images/latte.jpg'),
('카푸치노', '풍성한 우유거품이 올라간 이탈리안 클래식', 5000, 'coffee', '/images/cappuccino.jpg'),
('바닐라라떼', '달콤한 바닐라 시럽이 들어간 부드러운 라떼', 5500, 'coffee', '/images/vanilla-latte.jpg'),
('카라멜 마키아토', '달콤한 카라멜과 진한 에스프레소의 만남', 6000, 'coffee', '/images/caramel-macchiato.jpg');

-- 음료 메뉴
INSERT INTO menus (name, description, price, category, image_url) VALUES
('딸기 라떼', '신선한 딸기와 부드러운 우유의 조화', 6500, 'beverage', '/images/strawberry-latte.jpg'),
('초콜릿 라떼', '진한 초콜릿과 우유의 달콤한 만남', 6000, 'beverage', '/images/chocolate-latte.jpg'),
('그린티 라떼', '고급 말차를 사용한 부드러운 라떼', 5500, 'beverage', '/images/green-tea-latte.jpg'),
('아이스티', '상쁘한 레몬이 들어간 시원한 아이스티', 4000, 'beverage', '/images/iced-tea.jpg');

-- 디저트 메뉴
INSERT INTO menus (name, description, price, category, image_url) VALUES
('티라미수', '이탈리아 전통 디저트, 부드러운 마스카포네 치즈', 7000, 'dessert', '/images/tiramisu.jpg'),
('치즈케이크', '진한 크림치즈로 만든 뉴욕 스타일 케이크', 6500, 'dessert', '/images/cheesecake.jpg'),
('초콜릿 케이크', '진한 초콜릿과 부드러운 크림의 조화', 6000, 'dessert', '/images/chocolate-cake.jpg'),
('마카롱 (5개)', '프랑스 전통 마카롱 5개 세트', 8000, 'dessert', '/images/macaron.jpg');

-- 푸드 메뉴
INSERT INTO menus (name, description, price, category, image_url) VALUES
('크루아상', '바삭하고 부드러운 프랑스 전통 페이스트리', 3500, 'food', '/images/croissant.jpg'),
('샌드위치', '신선한 야채와 햄이 들어간 클럽 샌드위치', 8500, 'food', '/images/sandwich.jpg'),
('베이글', '쫄깃한 베이글과 크림치즈', 5000, 'food', '/images/bagel.jpg'),
('토스트', '바삭한 토스트와 잼', 4000, 'food', '/images/toast.jpg');

-- RLS (Row Level Security) 정책 설정
ALTER TABLE menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 메뉴를 읽을 수 있도록 허용
CREATE POLICY "Anyone can read menus" ON menus FOR SELECT USING (true);

-- 주문은 누구나 생성할 수 있도록 허용
CREATE POLICY "Anyone can create orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read orders" ON orders FOR SELECT USING (true);

-- 주문 아이템도 누구나 생성할 수 있도록 허용
CREATE POLICY "Anyone can create order items" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read order items" ON order_items FOR SELECT USING (true); 