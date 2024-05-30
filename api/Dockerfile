FROM oven/bun:1 as base

WORKDIR /app/api

COPY /api/package.json /api/bun.lockb /app/api/

RUN bun install --frozen-lockfile 

COPY /api .

EXPOSE 3000

RUN bun prisma generate

CMD ["bun", "run", "start"]
