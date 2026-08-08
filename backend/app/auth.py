from datetime import datetime,timedelta,timezone
from app.config import settings
import jwt
def create_access_token(data:dict)->str:
    to_encode=data.copy()
    user_id=data.get("user_id")
    if not user_id:
        raise ValueError("User_id is required")
    expire=datetime.now(timezone.utc)+timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({
        "sub":str(user_id),
        "exp":expire
    })

    encoded_jwt=jwt.encode(
        to_encode,
        settings.SECRET_KEY,
        algorithm=settings.ALGORITHM
    )

    return encoded_jwt


def verify_access_token(token:str)->dict|None:
    try:
        payload=jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None