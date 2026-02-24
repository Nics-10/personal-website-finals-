/*
  # Create Guestbook Table

  1. New Tables
    - `guestbook`
      - `id` (uuid, primary key) - Unique identifier for each entry
      - `name` (text) - Name of the person leaving the message
      - `message` (text) - The guestbook message content
      - `created_at` (timestamptz) - Timestamp when the entry was created

  2. Security
    - Enable RLS on `guestbook` table
    - Add policy for anyone to read all guestbook entries (public access)
    - Add policy for anyone to create new guestbook entries (public access)

  3. Indexes
    - Add index on `created_at` for efficient sorting of entries

  ## Notes
  - Guestbook entries are public and can be viewed by anyone
  - Anyone can submit a new guestbook entry without authentication
  - Entries are sorted by creation date (newest first)
  - Name and message fields are required (NOT NULL)
*/

CREATE TABLE IF NOT EXISTS guestbook (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read all guestbook entries
CREATE POLICY "Anyone can view guestbook entries"
  ON guestbook
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Anyone can create guestbook entries
CREATE POLICY "Anyone can create guestbook entries"
  ON guestbook
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) > 0 AND 
    char_length(name) <= 100 AND
    char_length(message) > 0 AND 
    char_length(message) <= 500
  );

-- Index for efficient sorting by creation date
CREATE INDEX IF NOT EXISTS idx_guestbook_created_at ON guestbook(created_at DESC);
