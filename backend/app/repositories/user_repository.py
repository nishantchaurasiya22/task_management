from app.db import get_connection,release_connection
from psycopg2.extras import RealDictCursor

def create_user(user_name:str,email:str,password:str):
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            INSERT INTO users(user_name,email,hashed_password)
            VALUES(%s,%s,%s)
            RETURNING id,user_name,email
            """,
            (user_name,email,password)
            )
        new_user=cur.fetchone()
        conn.commit()
        return new_user
    except Exception:
        conn.rollback()
        raise 
    finally:
        cur.close()
        release_connection(conn)

def login_user(identifier:str)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            SELECT id,user_name,email,hashed_password FROM users
            WHERE email=%s or user_name=%s
            """,
            (identifier,identifier)
        )
        user=cur.fetchone()
        return user
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def get_user_by_id(user_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
             SELECT id,user_name,email FROM users
             WHERE id=%s
            """,
            (user_id,)    
        )
        user=cur.fetchone()
        return user
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)
