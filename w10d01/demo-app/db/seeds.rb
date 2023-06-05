# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running the seeds"

puts "creating the characters"

20.times do
  Character.create(
    name: Faker::JapaneseMedia::StudioGhibli.character,
    movie: Faker::JapaneseMedia::StudioGhibli.movie
  )
end

puts "retrieving the newly created characters"

characters = Character.all

puts "creating the quotes"

50.times do
  Quote.create(
    quote: Faker::JapaneseMedia::StudioGhibli.quote,
    character: characters.sample
  )
end

puts "all done!!!"
