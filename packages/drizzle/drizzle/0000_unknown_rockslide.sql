CREATE TABLE "likes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "likes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer NOT NULL,
	"movieId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "movies" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "movies_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"tmdbId" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"backdropPath" varchar(255) NOT NULL,
	"posterPath" varchar(255) NOT NULL,
	"overview" varchar(255) NOT NULL,
	"releaseDate" date NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "movies_tmdbId_unique" UNIQUE("tmdbId")
);
--> statement-breakpoint
CREATE TABLE "ratings" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "ratings_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer NOT NULL,
	"movieId" integer NOT NULL,
	"rating" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"email" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "watched" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "watched_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" integer NOT NULL,
	"movieId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
