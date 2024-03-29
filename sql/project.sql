DROP TABLE IF EXISTS articletag;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS "like";
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS follow;
DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS profile(
    profile_id UUID NOT NULL PRIMARY KEY,
    profile_about VARCHAR(512),
    profile_activation_token CHAR(32),
    profile_email VARCHAR(128) NOT NULL UNIQUE,
    profile_hash CHAR(97) NOT NULL UNIQUE,
    profile_image_url VARCHAR(255),
    profile_name VARCHAR(32) NOT NULL UNIQUE
);


CREATE TABLE IF NOT EXISTS follow(
    -- this is the profile that is doing the following
    follow_profile_id UUID NOT NULL REFERENCES profile(profile_id),
    -- this is the profile that is being followed
    follow_following_profile_id UUID NOT NULL REFERENCES profile(profile_id),
    follow_date timestamptz NOT NULL,
    PRIMARY KEY(follow_profile_id, follow_following_profile_id)
);



CREATE TABLE IF NOT EXISTS article(
    article_id UUID NOT NULL PRIMARY KEY,
    article_author VARCHAR(255) NOT NULL,
    article_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
    article_image VARCHAR(255) NOT NULL,
    article_source_country VARCHAR(255) NOT NULL,
    article_source_number VARCHAR(255) NOT NULL UNIQUE,
    article_summary VARCHAR(512),
    article_text TEXT NOT NULL,
    article_title VARCHAR(255) NOT NULL,
    article_url VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS comment(
    comment_id UUID NOT NULL PRIMARY KEY,
    comment_article_id UUID NOT NULL,
    comment_profile_id UUID NOT NULL,
    comment_content VARCHAR(512) NOT NULL,
    comment_date_time TIMESTAMP WITH TIME ZONE NOT NULL,
    FOREIGN KEY (comment_article_id) REFERENCES article(article_id),
    FOREIGN KEY (comment_profile_id) REFERENCES profile(profile_id)
);

CREATE TABLE IF NOT EXISTS "like"(
    like_article_id UUID NOT NULL,
    like_profile_id UUID NOT NULL,
    like_date_time TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (like_article_id) REFERENCES article(article_id),
    FOREIGN KEY (like_profile_id) REFERENCES profile(profile_id),
    PRIMARY KEY (like_article_id, like_profile_id)
);

CREATE TABLE IF NOT EXISTS tag(
    tag_comment_id UUID NOT NULL,
    tag_profile_id UUID NOT NULL,
    FOREIGN KEY (tag_comment_id) REFERENCES comment(comment_id),
    FOREIGN KEY (tag_profile_id) REFERENCES profile(profile_id),
    PRIMARY KEY (tag_comment_id, tag_profile_id)
);
