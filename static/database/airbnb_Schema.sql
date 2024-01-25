CREATE TABLE "listings_KP_All_data_Clean" (
    "id" int   NOT NULL,
    "host_id" int   NOT NULL,
    "host_name" varchar (30)   NOT NULL,
	"host_has_profile_pick" varchar NOT NULL,
	"host_identity_verified" varchar NOT NULL,
	"neighbourhood_cleansed" varchar NOT NULL,
	"neighbourhood_group_cleansed" varchar NOT NULL,
	"latitude" int NOT NULL,
	"longitude" int NOT NULL,
	"property_type" varchar NOT NULL,
	"room_type" varchar NOT NULL,
	"accommodates" int NOT NULL,
	"bathrooms_text" varchar NOT NULL,
	"beds" int NOT NULL,
	"price" int NOT NULL,
	"has_availability" varchar NOT NULL,
	"review_scores_rating" int NOT NULL,
	
	
    PRIMARY KEY (
        "id"
     )
);