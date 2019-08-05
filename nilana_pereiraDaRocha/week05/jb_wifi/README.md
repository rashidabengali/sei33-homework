rails new jb_wifi —skip-git -T  -d postgresql

open `Gemfile` and add `pry-rails` as development dependency

rails generate model brand name:text

open `db/seeds.rb` and add these lines

```ruby
Brand.destroy_all
puts 'Creating brands'

Brand.create(name: 'Dell')
Brand.create(name: 'Apple')
Brand.create(name: 'HP')
```

 rails generate model electronics name:text description:text price:text brand_id:integer

 open `db/seeds.rb` and add these lines

 ```ruby
Brand.destroy_all
puts 'Creating brands'

Brand.create(name: 'Dell')
Brand.create(name: 'Apple')
Brand.create(name: 'HP')

Electronic.destroy_all
puts 'Creating electronics'

Electronic.create(name: 'Macbook', description: 'mac description', price: '$3000', brand_id: Brand.find_by(name: 'Apple').id)
Electronic.create(name: 'IMAC', description: 'IMAC description', price: '$2000', brand_id: Brand.find_by(name: 'Apple').id)
```

bundle exec rake db:setup

rails db:rollback

rails db:migrate

rails db:seed



