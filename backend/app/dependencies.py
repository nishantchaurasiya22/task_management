from fastapi import Request,status,HTTPException
from app.auth import verify_access_token

def get_current_user(request:Request)->dict:
        token=request.cookies.get("access_token")
        if not token:
            raise HTTPException(status.HTTP_401_UNAUTHORIZED,detail="Login required")
        payload=verify_access_token(token)
        if not payload:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Unauthorized user")
        return payload
        
        