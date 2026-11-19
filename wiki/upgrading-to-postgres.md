---
type: how-to
title: Upgrading to Postgres
description: PostgreSQL setup, migration boundaries, and backups for RoleSignal.
feature: setup
tags: [upgrade, postgres, sqlite, database, migration, docker, backup, restore]
aliases: [upgrade to postgres, database migration, DATABASE_URL still points at SQLite, use my own postgres]
status: stable
stale_after: 2027-10-18
---

# Upgrading to Postgres

RoleSignal uses PostgreSQL 18. The default Docker Compose configuration includes PostgreSQL with the vector extension, and builds the app from this repository.

## How do I start a new installation?

Run `docker compose up --build` from the project directory. Database data is stored in the `rolesignal_pgdata` Docker volume; uploaded resume files live in `rolesignaldb/data/` on the host.

## How do I move an existing installation?

Back up the database and uploaded files first. Preserve your `ENCRYPTION_KEY`, `AUTH_SECRET`, and other settings in `.env`. Existing encrypted API keys need the same encryption key.

If the previous installation used different Docker volume names or host folders, explicitly copy or mount the existing data into the RoleSignal configuration before starting it. Changing the project name does not automatically move existing storage.

This distribution does not include a SQLite importer or publish a historical SQLite import image. If you still use SQLite, complete the migration with your existing installation's tooling before switching to RoleSignal. Keep the original database and a tested backup until migration is verified.

The startup guard stops when `/data/dev.db` exists without its `dev.db.imported-at` marker. Create the marker only after verifying that migration is complete, or when deliberately starting without that SQLite data.

## How do I back up and restore my data?

Run `./backup-db.sh` to write a database dump into `rolesignaldb/data/backups/`. Restore with `./restore-db.sh <file>` into an empty database. On Windows, use WSL or Git Bash for these shell scripts.

Back up uploaded files separately. Copying a running PostgreSQL data directory is not a valid database backup. The in-app Data Backup moves one account's data and does not replace a full database dump.

## How do I use my own PostgreSQL server?

Set `DATABASE_URL` and `BUNDLED_DB=0` in `.env`. For example:

```dotenv
DATABASE_URL=postgres://user:password@db.example.internal:5432/rolesignal
BUNDLED_DB=0
```

Keep database credentials private. Use the server's appropriate TLS configuration; `sslmode=require` verifies its certificate with the bundled PostgreSQL client settings.

## How do I update RoleSignal?

Run `./deploy.sh` on Linux, WSL, or Git Bash, or `./deploy.ps1` in PowerShell. The script pulls source updates, builds the app, and restarts it. Keep environment-specific settings in `.env`.
