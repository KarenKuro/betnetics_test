### Betnetics Test Project

## Проект на базе NestJS, использующий Prisma ORM, PostgreSQL, Redis и Docker.

### Установка

## 1.Клонируй репозиторий:

```bash
git clone https://github.com/KarenKuro/betnetics_test.git
cd betnetics_test
```

## 2. Создай файл .env в корне проекта на основе .env.example:

```bash
cp .env.example .env
```

## 3. Запуск через Docker Compose

# Проект состоит из трёх контейнеров:

# Приложение NestJS

# PostgreSQL

# Redis

```bash
docker-compose up --build
```

## Приложение будет доступно по адресу: http://localhost:3000

## Bull Dashboard: http://localhost:3000/\_private/queues-bull/queue/eventBlocks?status=failed

## Открытие веб-интерфейса для базы:

```bash
npx prisma studio
```
