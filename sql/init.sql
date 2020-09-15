-- Drop table

-- DROP TABLE public.vt_type_list;

CREATE TABLE public.vt_type_list (
	type_code varchar NOT NULL,
	type_name varchar NOT NULL
);
-- Drop table

-- DROP TABLE public.vt_comment;

CREATE TABLE public.vt_comment (
	"comment" varchar NOT NULL,
	user_uuid uuid NOT NULL,
	create_date timestamp NOT NULL DEFAULT now(),
	update_date timestamp NULL,
	post_uuid uuid NULL,
	comment_uuid uuid NOT NULL DEFAULT uuid_generate_v1(),
	CONSTRAINT vt_comment_pk PRIMARY KEY (comment_uuid),
	CONSTRAINT vt_comment_fk FOREIGN KEY (user_uuid) REFERENCES vt_user(user_uuid),
	CONSTRAINT vt_comment_fk_1 FOREIGN KEY (post_uuid) REFERENCES vt_post(post_uuid)
);
-- Drop table

-- DROP TABLE public.vt_file;

CREATE TABLE public.vt_file (
	file_uuid uuid NOT NULL DEFAULT uuid_generate_v1(),
	file_path varchar NOT NULL,
	file_name varchar NOT NULL,
	file_type varchar NOT NULL,
	file_size varchar NOT NULL,
	user_uuid uuid NOT NULL,
	download_count int4 NULL,
	create_date timestamp NOT NULL DEFAULT now(),
	update_date timestamp NULL,
	post_uuid uuid NOT NULL,
	CONSTRAINT vt_file_pk PRIMARY KEY (file_uuid),
	CONSTRAINT vt_file_fk FOREIGN KEY (user_uuid) REFERENCES vt_user(user_uuid),
	CONSTRAINT vt_file_fk_1 FOREIGN KEY (post_uuid) REFERENCES vt_post(post_uuid)
);
-- Drop table

-- DROP TABLE public.vt_like;

CREATE TABLE public.vt_like (
	post_uuid uuid NULL,
	like_uuid uuid NOT NULL DEFAULT uuid_generate_v1(),
	user_uuid uuid NULL,
	comment_uuid uuid NULL,
	create_date timestamp NOT NULL DEFAULT now(),
	CONSTRAINT vt_like_pk PRIMARY KEY (like_uuid),
	CONSTRAINT vt_like_fk FOREIGN KEY (post_uuid) REFERENCES vt_post(post_uuid),
	CONSTRAINT vt_like_fk_2 FOREIGN KEY (comment_uuid) REFERENCES vt_comment(comment_uuid),
	CONSTRAINT vt_like_fk_3 FOREIGN KEY (user_uuid) REFERENCES vt_user(user_uuid)
);
-- Drop table

-- DROP TABLE public.vt_post;

CREATE TABLE public.vt_post (
	post_uuid uuid NOT NULL DEFAULT uuid_generate_v1(),
	title varchar NOT NULL,
	"content" varchar NOT NULL,
	read_count int4 NULL,
	create_date timestamp NULL DEFAULT now(),
	update_date timestamp NULL,
	user_uuid uuid NOT NULL,
	CONSTRAINT vt_post_pk PRIMARY KEY (post_uuid),
	CONSTRAINT vt_post_fk FOREIGN KEY (user_uuid) REFERENCES vt_user(user_uuid)
);
-- Drop table

-- DROP TABLE public.vt_user;

CREATE TABLE public.vt_user (
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	create_date timestamp NOT NULL DEFAULT now(),
	update_date timestamp NULL,
	out_yn varchar(1) NULL DEFAULT 'N'::character varying,
	phone varchar NULL,
	user_uuid uuid NOT NULL DEFAULT uuid_generate_v1(),
	CONSTRAINT vt_user_pk PRIMARY KEY (user_uuid),
	CONSTRAINT vt_user_un UNIQUE (email)
);
CREATE INDEX vt_user_user_uuid_idx ON public.vt_user USING btree (user_uuid);

