from psycopg2 import pool
from app.config import settings


connection_pool=pool.SimpleConnectionPool(
    1,20,
    host=settings.DB_HOST,
    port=settings.DB_PORT,
    database=settings.DB_NAME,
    user=settings.DB_USER,
    password=settings.DB_PASSWORD
)

def get_connection():
    return connection_pool.getconn()

def release_connection(conn):
    return connection_pool.putconn(conn)
