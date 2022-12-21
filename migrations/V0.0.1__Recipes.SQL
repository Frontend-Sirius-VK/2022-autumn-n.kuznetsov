create table recipes
(
	id int generated always as identity primary key,
	url_image text,
	name_recipe text,
	category_recipe text,
	time int,
	description_recipe text,
	author text
)