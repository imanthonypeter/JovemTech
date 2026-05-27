-- 1. Criação dos tipos ENUM
CREATE TYPE "enum_Usuarios_tipo" AS ENUM ('empresa', 'jovem');
CREATE TYPE "enum_Vagas_status" AS ENUM ('aberta', 'fechada');
CREATE TYPE "enum_Candidaturas_status" AS ENUM ('pendente', 'aprovada', 'rejeitada');

-- 2. Tabela Usuarios
CREATE TABLE "Usuarios" (
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "senha" VARCHAR(255) NOT NULL,
    "tipo" "enum_Usuarios_tipo" NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabela Vagas
CREATE TABLE "Vagas" (
    "id" SERIAL PRIMARY KEY,
    "titulo" VARCHAR(255) NOT NULL,
    "descricao" TEXT NOT NULL,
    "requisitos" TEXT,
    "status" "enum_Vagas_status" DEFAULT 'aberta',
    "empresaId" INTEGER REFERENCES "Usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabela Candidaturas
CREATE TABLE "Candidaturas" (
    "id" SERIAL PRIMARY KEY,
    "status" "enum_Candidaturas_status" DEFAULT 'pendente',
    "jovemId" INTEGER REFERENCES "Usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "vagaId" INTEGER REFERENCES "Vagas"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
