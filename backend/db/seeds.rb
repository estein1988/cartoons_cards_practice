# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cartoon.destroy_all

Cartoon.create(name: "Rocko's Modern Life", image_url: "https://cdn.vox-cdn.com/thumbor/Tsms0S51yNg5ZNu3oZk8uiZSOAQ=/0x0:1432x719/1200x800/filters:focal(350x210:578x438)/cdn.vox-cdn.com/uploads/chorus_image/image/64931289/rocko_rachel.0.png")
Cartoon.create(name: "Courage the Cowardly Dog", image_url: "https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/358906d35dc4784ee42ab2f176f8c30b.png&quality=70&width=720")
Cartoon.create(name: "Ahh Real Monsters", image_url: "https://dotandline.net/wp-content/uploads/2016/08/1_qQSC_fs28wZuBkafW71snQ-1024x642.jpeg")