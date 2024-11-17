use actix_cors::Cors;
use actix_web::{http::header, middleware, web, App, HttpResponse, HttpServer, Result};

async fn hello_world() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok()
        .content_type("text/plain")
        .body("Hello from Rust!"))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    HttpServer::new(|| {
        let cors = Cors::default()
            // Allow only our Deno frontend
            .allowed_origin("http://localhost:8081")
            .allowed_methods(vec!["GET"])
            .allowed_headers(vec![header::CONTENT_TYPE])
            .max_age(3600);

        App::new()
            .wrap(middleware::Logger::default())
            .wrap(cors)
            .route("/", web::get().to(hello_world))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
