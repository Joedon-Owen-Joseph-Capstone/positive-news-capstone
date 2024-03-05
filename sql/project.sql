DROP TABLE IF EXISTS articleTag;
DROP TABLE IF EXISTS "like";
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS tag(
    tag_id UUID NOT NULL PRIMARY KEY,
    tag_name VARCHAR(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS profile(
    profile_id UUID NOT NULL PRIMARY KEY,
    profile_activation_token CHAR(32),
    profile_email VARCHAR(128) NOT NULL UNIQUE,
    profile_hash CHAR(97) NOT NULL UNIQUE,
    profile_image_url VARCHAR(255),
    profile_name VARCHAR(32) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS article(
    article_id UUID NOT NULL PRIMARY KEY,
    article_author VARCHAR(255) NOT NULL,
    article_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
    article_image VARCHAR(255) NOT NULL,
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
    comment_reply_comment_id UUID NOT NULL,
    tagged_profile_id UUID,
    FOREIGN KEY (comment_reply_comment_id) REFERENCES comment(comment_id),
    FOREIGN KEY (comment_article_id) REFERENCES article(article_id),
    FOREIGN KEY (comment_profile_id) REFERENCES profile(profile_id),
    FOREIGN KEY (tagged_profile_id) REFERENCES profile(profile_id)
);

CREATE TABLE IF NOT EXISTS "like"(
    like_article_id UUID NOT NULL,
    like_profile_id UUID NOT NULL,
    like_date_time TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (like_article_id) REFERENCES article(article_id),
    FOREIGN KEY (like_profile_id) REFERENCES profile(profile_id),
    PRIMARY KEY (like_article_id, like_profile_id)
);

CREATE TABLE IF NOT EXISTS articleTag(
    article_tag_article_id UUID NOT NULL,
    article_tag_tag_id UUID NOT NULL,
    FOREIGN KEY (article_tag_article_id) REFERENCES article(article_id),
    FOREIGN KEY (article_tag_tag_id) REFERENCES tag(tag_id),
    PRIMARY KEY (article_tag_article_id, article_tag_tag_id)
);
