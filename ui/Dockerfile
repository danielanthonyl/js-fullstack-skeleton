FROM oven/bun:1 as base

WORKDIR /app/ui

COPY /ui/package.json /ui/bun.lockb /app/ui/

RUN bun install --frozen-lockfile 

COPY /ui .

EXPOSE 5173/tcp

CMD ["bun", "run", "start"]
