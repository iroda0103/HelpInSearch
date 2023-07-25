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

- `q`: findinslarni  nomi orqali qidirish
- `type`: buyumlarni turi bo'yicha saralash (`found`, `lost`)
- `sort`: sort obyekti
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

