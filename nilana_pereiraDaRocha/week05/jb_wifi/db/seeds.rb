# frozen_string_literal: true

Brand.destroy_all
puts 'Creating brands'

Brand.create(name: 'Dell')
Brand.create(name: 'Apple')
Brand.create(name: 'HP')

Electronic.destroy_all
puts 'Creating electronics'

Electronic.create(name: 'Macbook',
                  image: 'https://cdn.idropnews.com/wp-content/uploads/2017/07/24164123/Free-MacBook-Pro-Giveaway-iDrop-News.jpg',
                  description: 'MacBook Pro is an award-winning laptop computer perfect for students, professionals, and creatives. One lucky winner will receive a 13-inch MacBook Pro for FREE on July 24th, 2019. 2.3GHz dual-core 7th-generation Intel Core i5 processor Turbo Boost up to 3.6GHz 8GB 2133MHz LPDDR3 memory 256GB SSD storage Intel Iris Plus Graphics 640', price: '$3000', brand_id: Brand.find_by(name: 'Apple').id)
Electronic.create(name: 'IMAC', description: 'IMAC description', price: '$2000', brand_id: Brand.find_by(name: 'Apple').id)
