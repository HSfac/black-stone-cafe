import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 타입 정의
export type Database = {
  public: {
    Tables: {
      // 메뉴 테이블
      menus: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          image_url: string | null
          category: string
          is_available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          image_url?: string | null
          category: string
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          image_url?: string | null
          category?: string
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      // 주문 테이블
      orders: {
        Row: {
          id: string
          customer_name: string
          customer_phone: string
          pickup_time: string
          status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
          total_amount: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_name: string
          customer_phone: string
          pickup_time: string
          status?: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
          total_amount: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_name?: string
          customer_phone?: string
          pickup_time?: string
          status?: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
          total_amount?: number
          created_at?: string
          updated_at?: string
        }
      }
      // 주문 아이템 테이블
      order_items: {
        Row: {
          id: string
          order_id: string
          menu_id: string
          quantity: number
          unit_price: number
          options: Record<string, unknown> | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          menu_id: string
          quantity: number
          unit_price: number
          options?: Record<string, unknown> | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          menu_id?: string
          quantity?: number
          unit_price?: number
          options?: Record<string, unknown> | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 