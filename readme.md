# Help in search

Ushbu loyiha yo'qolgan buyumlarni topish va topib olingan buyumlarni o'z egasiga qaytarishga ko'maklashadi

Backend yo'nalishida tizim uchun REST API da va Sequelize ORMda tuzilgan.

## Tizimning funksional talablari:

-Yo'qolgan va topib olingan buyumlarni ma'lumotlarini saqlash va taqdim qila olish;
- Name va,addressi bo'yicha sort qila olish;
-Name bo'yicha qidira olish
- Userlar Autentifikatsiya (login) imkoniyatiga ega.



## Mavjud findingslarni olish uchun API

```
GET /api/findings
```

Parametrlar:

- `q`: buyumlarni  nomi orqali qidirish
- `type`: buyumlarni turi bo'yicha saralash (`found` or `lost`)
- `sort`: sort obyekti(by,order)
- `filter`: filter obyekti

HTTP 200

```json
{
  "page": 1,
  "count": 3,
  "page_size": 10,
  {
    "data": [
        {
            "id": 1,
            "name": "Telefon",
            "description": "Yo'qolgan telefon",
            "type": "found",
            "user_id": 1,
            "address_id": 1,
            "img": "phone.jpg",
            "address_addition": "123-kvartira"
        },
        {
            "id": 2,
            "name": "noutbuk",
            "description": "Noutbuk topildi",
            "type": "lost",
            "user_id": 2,
            "address_id": 2,
            "img": "laptop.jpg",
            "address_addition": "Apt 456"
        },
        {
            "id": 3,
            "name": "hamyon",
            "description": "Yo'qotilgan hamyon",
            "type": "lost",
            "user_id": 3,
            "address_id": 2,
            "img": "wallet.jpg",
            "address_addition": ""
        }
    ]
}
}


## Mavjud userlarni olish uchun API

```
GET /api/users
```

HTTP 200

```json
{
    "data": [
        {
            "id": 1,
            "first_name": "John",
            "last_name": "Doe",
            "username": "johndoe",
            "password": "123456",
            "phone": "1234567890",
            "email": "johndoe@example.com",
            "role": "admin"
        },
        {
            "id": 2,
            "first_name": "Jane",
            "last_name": "Smith",
            "username": "janesmith",
            "password": "abcdef",
            "phone": "9876543210",
            "email": "janesmith@example.com",
            "role": "admin"
        },
        {
            "id": 3,
            "first_name": "Bob",
            "last_name": "Johnson",
            "username": "bobjohnson",
            "password": "qwerty",
            "phone": "4567891230",
            "email": "bobjohnson@example.com",
            "role": "user"
        }
    ]
}

## Login qilish uchun API

```
POST /api/users/login
```

HTTP 200

```json
{
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo4fSwiaWF0IjoxNjkwMjgxNjczfQ.ujik9wfVC30eUDSMMtSpB3HnuBNa9W4KXPW6BZnE4es"
}


## Userni tahrirlash   uchun API

```
PATCH /api/users/me
```

HTTP 200

```json
{
    "data": {
        "id": 8,
        "first_name": "Iroda",
        "last_name": "Mo'minova",
        "username": "iroda01",
        "password": "1234",
        "phone": "99888111111",
        "email": "iroda1@example.com",
        "role": "user"
    }
}


## Userni o'chirish   uchun API

```
DELETE /api/users/me
```

HTTP 200

```json
{
    "data": {
        "id": 8,
        "first_name": "Iroda",
        "last_name": "Mo'minova",
        "username": "iroda01",
        "password": "1234",
        "phone": "99888111111",
        "email": "iroda1@example.com",
        "role": "user"
    }
}