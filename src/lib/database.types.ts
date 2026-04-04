export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          read: boolean | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          read?: boolean | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          read?: boolean | null
        }
        Relationships: []
      }
      news: {
        Row: {
          body: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          image_url: string | null
          published: boolean | null
          published_at: string | null
          slug: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          published?: boolean | null
          published_at?: string | null
          slug?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          published?: boolean | null
          published_at?: string | null
          slug?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      productions: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          genre: string | null
          id: string
          poster_url: string | null
          slug: string | null
          sort_order: number | null
          title: string
          trailer_url: string | null
          updated_at: string | null
          year: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          genre?: string | null
          id?: string
          poster_url?: string | null
          slug?: string | null
          sort_order?: number | null
          title: string
          trailer_url?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          genre?: string | null
          id?: string
          poster_url?: string | null
          slug?: string | null
          sort_order?: number | null
          title?: string
          trailer_url?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  TableName extends keyof DefaultSchema["Tables"]
> = DefaultSchema["Tables"][TableName]["Row"]

export type Production = Tables<"productions">
export type News = Tables<"news">
export type ContactSubmission = Tables<"contact_submissions">
