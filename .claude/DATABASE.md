# Database Documentation

This document outlines the database schema and SQL scripts for the INTHEMOOD PICTURES website using Supabase PostgreSQL.

## Overview

The database supports content management for a production company website with the following features:

- Content management for all pages
- Media asset storage and organization
- News and blog post management
- Collaboration inquiry handling
- Admin authentication for content editing

## Tables

### 1. productions

Stores information about movies, series, and other productions.

| Column       | Type        | Description                                      |
| ------------ | ----------- | ------------------------------------------------ |
| id           | UUID        | Primary key                                      |
| title        | TEXT        | Production title                                 |
| description  | TEXT        | Production description                           |
| poster_url   | TEXT        | URL to poster image                              |
| trailer_url  | TEXT        | URL to trailer video                             |
| type         | VARCHAR(50) | Type: 'film', 'series', 'commercial', etc.       |
| status       | VARCHAR(50) | Status: 'in_production', 'completed', 'upcoming' |
| release_date | DATE        | Release date                                     |
| featured     | BOOLEAN     | Whether to feature on homepage                   |
| created_at   | TIMESTAMP   | Record creation timestamp                        |
| updated_at   | TIMESTAMP   | Record update timestamp                          |

### 2. news

Stores company news, updates, and press releases.

| Column       | Type      | Description                |
| ------------ | --------- | -------------------------- |
| id           | UUID      | Primary key                |
| title        | TEXT      | Article title              |
| content      | TEXT      | Article content (HTML)     |
| excerpt      | TEXT      | Short excerpt for previews |
| image_url    | TEXT      | Featured image URL         |
| published    | BOOLEAN   | Publication status         |
| published_at | TIMESTAMP | Publication date           |
| created_at   | TIMESTAMP | Record creation timestamp  |
| updated_at   | TIMESTAMP | Record update timestamp    |

### 3. page_content

Stores editable content for website pages.

| Column       | Type         | Description                                 |
| ------------ | ------------ | ------------------------------------------- |
| id           | UUID         | Primary key                                 |
| page         | VARCHAR(100) | Page identifier ('home', 'vision', 'about') |
| section      | VARCHAR(100) | Section identifier within page              |
| content_type | VARCHAR(50)  | Content type: 'text', 'html', 'json'        |
| content      | TEXT         | Content data                                |
| created_at   | TIMESTAMP    | Record creation timestamp                   |
| updated_at   | TIMESTAMP    | Record update timestamp                     |

### 4. media_assets

Stores media files for moodboard and inspiration gallery.

| Column      | Type         | Description                             |
| ----------- | ------------ | --------------------------------------- |
| id          | UUID         | Primary key                             |
| filename    | TEXT         | Original filename                       |
| file_url    | TEXT         | Storage URL                             |
| file_type   | VARCHAR(50)  | File type: 'image', 'video', 'document' |
| mime_type   | VARCHAR(100) | MIME type                               |
| file_size   | INTEGER      | File size in bytes                      |
| alt_text    | TEXT         | Alternative text for accessibility      |
| caption     | TEXT         | Optional caption                        |
| tags        | TEXT[]       | Array of tags for organization          |
| visible     | BOOLEAN      | Whether to show in gallery              |
| order_index | INTEGER      | Display order                           |
| created_at  | TIMESTAMP    | Record creation timestamp               |
| updated_at  | TIMESTAMP    | Record update timestamp                 |

### 5. collaborations

Stores collaboration inquiries from the contact form.

| Column       | Type        | Description                            |
| ------------ | ----------- | -------------------------------------- |
| id           | UUID        | Primary key                            |
| name         | TEXT        | Contact name                           |
| email        | TEXT        | Contact email                          |
| company      | TEXT        | Company/organization                   |
| project_type | VARCHAR(50) | Type of project                        |
| budget_range | VARCHAR(50) | Budget range                           |
| timeline     | TEXT        | Project timeline                       |
| message      | TEXT        | Detailed project description           |
| status       | VARCHAR(50) | Status: 'new', 'reviewed', 'responded' |
| created_at   | TIMESTAMP   | Record creation timestamp              |
| updated_at   | TIMESTAMP   | Record update timestamp                |

### 6. admin_users

Stores admin user information for authentication.

| Column     | Type        | Description               |
| ---------- | ----------- | ------------------------- |
| id         | UUID        | Primary key               |
| email      | TEXT        | Admin email address       |
| phone      | TEXT        | Admin phone number        |
| name       | TEXT        | Admin name                |
| role       | VARCHAR(50) | Admin role                |
| active     | BOOLEAN     | Whether account is active |
| last_login | TIMESTAMP   | Last login timestamp      |
| created_at | TIMESTAMP   | Record creation timestamp |
| updated_at | TIMESTAMP   | Record update timestamp   |

### 7. auth_sessions

Stores authentication sessions for admin users.

| Column        | Type        | Description                        |
| ------------- | ----------- | ---------------------------------- |
| id            | UUID        | Primary key                        |
| admin_user_id | UUID        | Foreign key to admin_users         |
| session_token | TEXT        | Unique session token               |
| magic_code    | VARCHAR(10) | Magic link/code for authentication |
| expires_at    | TIMESTAMP   | Session expiration                 |
| used          | BOOLEAN     | Whether magic code was used        |
| created_at    | TIMESTAMP   | Record creation timestamp          |

## Relationships

- `auth_sessions.admin_user_id` → `admin_users.id`

## Indexes

Additional indexes for performance:

```sql
CREATE INDEX idx_productions_featured ON productions(featured) WHERE featured = true;
CREATE INDEX idx_productions_type ON productions(type);
CREATE INDEX idx_news_published ON news(published, published_at) WHERE published = true;
CREATE INDEX idx_page_content_page_section ON page_content(page, section);
CREATE INDEX idx_media_assets_visible ON media_assets(visible, order_index) WHERE visible = true;
CREATE INDEX idx_collaborations_status ON collaborations(status, created_at);
CREATE INDEX idx_auth_sessions_token ON auth_sessions(session_token);
CREATE INDEX idx_auth_sessions_admin ON auth_sessions(admin_user_id, expires_at);
```

## Row Level Security (RLS)

Enable RLS and create policies:

```sql
-- Enable RLS on all tables
ALTER TABLE productions ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE collaborations ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE auth_sessions ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read access for featured productions" ON productions FOR SELECT USING (featured = true);
CREATE POLICY "Public read access for published news" ON news FOR SELECT USING (published = true);
CREATE POLICY "Public read access for page content" ON page_content FOR SELECT TO anon USING (true);
CREATE POLICY "Public read access for visible media" ON media_assets FOR SELECT USING (visible = true);

-- Allow anyone to insert collaboration inquiries
CREATE POLICY "Allow collaboration submissions" ON collaborations FOR INSERT TO anon WITH CHECK (true);

-- Admin full access (authenticated users only)
CREATE POLICY "Admin full access to productions" ON productions TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access to news" ON news TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access to page_content" ON page_content TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin full access to media_assets" ON media_assets TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin read access to collaborations" ON collaborations FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin update collaborations status" ON collaborations FOR UPDATE TO authenticated USING (true);
```

## SQL Scripts

### Create Tables

```sql
-- Create productions table (enhanced existing)
CREATE TABLE IF NOT EXISTS productions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    poster_url TEXT,
    trailer_url TEXT,
    type VARCHAR(50) DEFAULT 'film',
    status VARCHAR(50) DEFAULT 'upcoming',
    release_date DATE,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create news table (enhanced existing)
CREATE TABLE IF NOT EXISTS news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    excerpt TEXT,
    image_url TEXT,
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create page_content table
CREATE TABLE IF NOT EXISTS page_content (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page VARCHAR(100) NOT NULL,
    section VARCHAR(100) NOT NULL,
    content_type VARCHAR(50) DEFAULT 'text',
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(page, section)
);

-- Create media_assets table
CREATE TABLE IF NOT EXISTS media_assets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    filename TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    mime_type VARCHAR(100),
    file_size INTEGER,
    alt_text TEXT,
    caption TEXT,
    tags TEXT[],
    visible BOOLEAN DEFAULT true,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create collaborations table
CREATE TABLE IF NOT EXISTS collaborations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    project_type VARCHAR(50),
    budget_range VARCHAR(50),
    timeline TEXT,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    name TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create auth_sessions table
CREATE TABLE IF NOT EXISTS auth_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    admin_user_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
    session_token TEXT UNIQUE NOT NULL,
    magic_code VARCHAR(10),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    used BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Create Indexes

```sql
-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_productions_featured ON productions(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_productions_type ON productions(type);
CREATE INDEX IF NOT EXISTS idx_productions_status ON productions(status);

CREATE INDEX IF NOT EXISTS idx_news_published ON news(published, published_at) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news(published_at DESC) WHERE published = true;

CREATE INDEX IF NOT EXISTS idx_page_content_page_section ON page_content(page, section);

CREATE INDEX IF NOT EXISTS idx_media_assets_visible ON media_assets(visible, order_index) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_media_assets_type ON media_assets(file_type);
CREATE INDEX IF NOT EXISTS idx_media_assets_tags ON media_assets USING GIN(tags);

CREATE INDEX IF NOT EXISTS idx_collaborations_status ON collaborations(status, created_at);
CREATE INDEX IF NOT EXISTS idx_collaborations_created_at ON collaborations(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_auth_sessions_token ON auth_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_auth_sessions_admin ON auth_sessions(admin_user_id, expires_at);
CREATE INDEX IF NOT EXISTS idx_auth_sessions_expires ON auth_sessions(expires_at);
```

### Create Update Timestamp Triggers

```sql
-- Function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_productions_updated_at BEFORE UPDATE ON productions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_page_content_updated_at BEFORE UPDATE ON page_content
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_media_assets_updated_at BEFORE UPDATE ON media_assets
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_collaborations_updated_at BEFORE UPDATE ON collaborations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### Insert Default Admin User

```sql
-- Insert default admin user (replace with actual email/phone)
INSERT INTO admin_users (email, phone, name, role)
VALUES ('admin@inthemood.com', '+1234567890', 'Admin User', 'super_admin')
ON CONFLICT (email) DO NOTHING;
```

### Insert Default Page Content

```sql
-- Insert default page content
INSERT INTO page_content (page, section, content_type, content) VALUES
    ('home', 'hero_title', 'text', 'INTHEMOOD PICTURES'),
    ('home', 'hero_subtitle', 'text', 'Creating compelling visual stories through innovative filmmaking and production'),
    ('home', 'hero_cta', 'text', 'Explore Our Work'),

    ('vision', 'title', 'text', 'Our Vision'),
    ('vision', 'intro', 'text', 'At INTHEMOOD PICTURES, we believe in the transformative power of visual storytelling. Our vision is to create authentic, compelling narratives that resonate with audiences and leave lasting impressions.'),
    ('vision', 'mission_title', 'text', 'Our Mission'),
    ('vision', 'mission_content', 'text', 'We are dedicated to producing high-quality films and series that explore the human experience through innovative cinematography, compelling narratives, and authentic character development.'),
    ('vision', 'values_title', 'text', 'Our Values'),
    ('vision', 'values_content', 'json', '["Authenticity in storytelling", "Innovation in production techniques", "Collaboration with talented artists", "Commitment to quality", "Respect for diverse perspectives"]'),

    ('moodboard', 'title', 'text', 'Moodboard & Inspiration'),
    ('moodboard', 'subtitle', 'text', 'Visual inspiration, behind-the-scenes moments, and latest news from our creative journey.'),

    ('collaborate', 'title', 'text', 'Let''s Collaborate'),
    ('collaborate', 'subtitle', 'text', 'Have a project in mind? We''d love to hear about it. Let''s create something amazing together.'),
    ('collaborate', 'contact_email', 'text', 'hello@inthemoodpictures.com'),
    ('collaborate', 'contact_phone', 'text', '+1 (555) 123-4567'),
    ('collaborate', 'contact_address', 'text', '123 Creative Street\nLos Angeles, CA 90210')
ON CONFLICT (page, section) DO NOTHING;
```

### Sample Data

```sql
-- Insert sample productions
INSERT INTO productions (title, description, type, status, featured) VALUES
    ('Sample Film Project', 'A compelling drama about human connections in the digital age.', 'film', 'in_production', true),
    ('Commercial Series', 'High-impact commercial content for major brands.', 'commercial', 'completed', true),
    ('Documentary Feature', 'An exploration of contemporary social issues.', 'documentary', 'upcoming', false)
ON CONFLICT DO NOTHING;

-- Insert sample news
INSERT INTO news (title, content, excerpt, published, published_at) VALUES
    ('Project Update', '<p>Latest updates from our current production...</p>', 'Latest updates from our current production...', true, NOW() - INTERVAL '5 days'),
    ('Award Recognition', '<p>We''re honored to receive recognition for...</p>', 'We''re honored to receive recognition for...', true, NOW() - INTERVAL '10 days'),
    ('New Partnership', '<p>Excited to announce our collaboration with...</p>', 'Excited to announce our collaboration with...', true, NOW() - INTERVAL '15 days')
ON CONFLICT DO NOTHING;
```
