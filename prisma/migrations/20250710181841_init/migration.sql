-- CreateTable
CREATE TABLE "tournaments_info" (
    "id" INTEGER NOT NULL,
    "caption" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tournaments_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sports" (
    "id" INTEGER NOT NULL,
    "parent_id" INTEGER,
    "kind" TEXT NOT NULL,
    "region_id" INTEGER,
    "sort_order" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "search_key_words" TEXT,
    "tournament_info_id" INTEGER,
    "sport_category_id" INTEGER,
    "geo_category_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" INTEGER NOT NULL,
    "parent_id" INTEGER,
    "sort_order" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "num" INTEGER NOT NULL,
    "sport_id" INTEGER NOT NULL,
    "kind" INTEGER NOT NULL,
    "root_kind" INTEGER NOT NULL,
    "team_1_id" INTEGER,
    "team_2_id" INTEGER,
    "team_1" TEXT,
    "team_2" TEXT,
    "name" TEXT NOT NULL,
    "start_time" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_blocks" (
    "event_id" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_blocks_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "custom_factors" (
    "e" INTEGER NOT NULL,
    "count_all" INTEGER NOT NULL,
    "factors" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "custom_factors_pkey" PRIMARY KEY ("e")
);

-- AddForeignKey
ALTER TABLE "sports" ADD CONSTRAINT "sports_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "sports"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sports" ADD CONSTRAINT "sports_tournament_info_id_fkey" FOREIGN KEY ("tournament_info_id") REFERENCES "tournaments_info"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_sport_id_fkey" FOREIGN KEY ("sport_id") REFERENCES "sports"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_blocks" ADD CONSTRAINT "event_blocks_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_factors" ADD CONSTRAINT "custom_factors_e_fkey" FOREIGN KEY ("e") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
