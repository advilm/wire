use serde::Deserialize;
use validator::Validate;

#[derive(Deserialize, Clone)]
#[allow(dead_code)]
pub struct Config<'a> {
    pub postgres_url: &'a str,
    pub port: String,
}

#[derive(Deserialize, Validate)]
pub struct User {
    #[validate(email)]
    pub email: String,

    #[validate(length(min = 5, max = 32))]
    pub username: String,

    #[validate(length(min = 8, max = 128))]
    pub password: String,
}
