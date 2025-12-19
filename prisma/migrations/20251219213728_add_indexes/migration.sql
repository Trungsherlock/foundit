-- CreateIndex
CREATE INDEX "Idea_vote_idx" ON "Idea"("vote");

-- CreateIndex
CREATE INDEX "Idea_createdAt_idx" ON "Idea"("createdAt");

-- CreateIndex
CREATE INDEX "Idea_authorId_idx" ON "Idea"("authorId");

-- CreateIndex
CREATE INDEX "Idea_title_idx" ON "Idea"("title");

-- CreateIndex
CREATE INDEX "Product_vote_idx" ON "Product"("vote");

-- CreateIndex
CREATE INDEX "Product_createdAt_idx" ON "Product"("createdAt");

-- CreateIndex
CREATE INDEX "Product_authorId_idx" ON "Product"("authorId");

-- CreateIndex
CREATE INDEX "Product_title_idx" ON "Product"("title");
