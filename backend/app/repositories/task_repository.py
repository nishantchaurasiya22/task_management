from psycopg2.extras import RealDictCursor
from app.db import get_connection,release_connection

def create_task(title:str,description:str,user_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
        """
        INSERT INTO tasks(title,description,user_id)
        VALUES(%s,%s,%s)
        RETURNING id,title,description,is_completed,user_id
        """,
        (title,description,user_id)
        )
        result=cur.fetchone()
        conn.commit()
        return result
    except Exception:
        conn.rollback()
        raise 
    finally:
        cur.close()
        release_connection(conn)

def get_all_tasks(user_id:int)->list:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            SELECT id,title,description,is_completed
            FROM tasks
            WHERE user_id=%s
            ORDER BY id
            """,
            (user_id,)
        )
        result=cur.fetchall()
        return result
    finally:
        cur.close()
        release_connection(conn)

def update_task(is_completed:bool,task_id:int,user_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            """
            UPDATE tasks
            SET is_completed=%s
            WHERE id=%s AND user_id=%s
            RETURNING id,title,description,is_completed
            """,
            (is_completed,task_id,user_id)
        )
        updated_task=cur.fetchone()
        conn.commit()
        return updated_task
    
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        release_connection(conn)

def delete_task(task_id:int,user_id:int)->dict:
    conn=get_connection()
    cur=conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
        """
        DELETE FROM tasks
        WHERE id=%s AND user_id=%s
       
        """,
        (task_id,user_id)
        )
        if cur.rowcount == 0:
            return None
        conn.commit()
        return True
    except Exception:
            conn.rollback()
            raise 
    finally:
        cur.close()
        release_connection(conn)

