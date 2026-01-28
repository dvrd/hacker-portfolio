CREATE TABLE "cv_downloads" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_hash" varchar(64),
	"ip_address" varchar(45),
	"user_agent" text,
	"referer" text,
	"downloaded_at" timestamp DEFAULT now() NOT NULL,
	"country" varchar(2),
	"city" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "page_views" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_path" varchar(255) NOT NULL,
	"session_hash" varchar(64),
	"ip_address" varchar(45),
	"user_agent" text,
	"referer" text,
	"viewed_at" timestamp DEFAULT now() NOT NULL,
	"session_id" uuid,
	"duration_seconds" integer
);
