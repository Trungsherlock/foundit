@echo off
echo.
echo ============================================
echo   Docker Database Setup
echo ============================================
echo.
echo This will:
echo 1. Create database tables (push schema)
echo 2. Seed with sample data
echo.
echo IMPORTANT: Make sure your local PostgreSQL
echo service is STOPPED to avoid conflicts!
echo.
echo Press Ctrl+C to cancel, or
pause

set DATABASE_URL=postgresql://postgres:trung123@localhost:5432/foundit

echo.
echo Step 1: Creating database tables...
echo Connecting to: %DATABASE_URL%
echo.

yarn prisma db push --accept-data-loss

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Failed to create tables!
    pause
    exit /b 1
)

echo.
echo Step 2: Seeding database with sample data...
echo.

yarn seed

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Failed to seed database!
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Setup Complete!
echo ============================================
echo.
echo Database has been created and seeded.
echo You can now access the app at:
echo   http://localhost:3000
echo.
pause
