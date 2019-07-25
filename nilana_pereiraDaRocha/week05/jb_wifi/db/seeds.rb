# frozen_string_literal: true

Brand.destroy_all
puts 'Creating brands'

Brand.create(name: 'Dell', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png', description: 'Dell is an US multinational computer technology company that develops, sells, repairs, and supports computers and related products and services. Named after its founder, Michael Dell, the company is one of the largest technological corporations in the world, employing more than 145,000 people in the U.S. and around the world (Annual report 2018).')
Brand.create(name: 'Apple', image: 'https://www.gardencity.com.au/media/GardenCity/AMP/Store/Apple-Store.jpg?quality=70', description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Four tech companies along with Amazon, Google, and Facebook.')
Brand.create(name: 'HP', image: 'https://logonoid.com/images/hp-logo.png', description: 'The Hewlett-Packard Company (commonly referred to as HP, and stylized as hp) or Hewlett-Packard was an American multinational information technology company headquartered in Palo Alto, California. It developed and provided a wide variety of hardware components as well as software and related services to consumers, small- and medium-sized businesses (SMBs) and large enterprises, including customers in the government, health and education sectors.')

Electronic.destroy_all
puts 'Creating electronics'

Electronic.create(name: 'MacBook Pro',
                  image: 'https://cdn.idropnews.com/wp-content/uploads/2017/07/24164123/Free-MacBook-Pro-Giveaway-iDrop-News.jpg',
                  description: 'Overview:
                  MacBook Pro has new ninth-generation 8-core Intel processor. Turbo Boost up to 4.8GHz. A brilliant and colourful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It’s Apple’s most powerful notebook. Pushed even further.
                  Key Features
                  8-core ninth-generation Intel Core i9 processor
                  Brilliant Retina display with True Tone technology
                  Touch Bar and Touch ID
                  Radeon Pro 560X graphics with 4GB of video memory
                  Ultrafast SSD
                  Four Thunderbolt 3 (USB-C) ports
                  Up to 10 hours of battery life*
                  802.11ac Wi-Fi
                  Latest Apple-designed keyboard
                  Force Touch trackpad
                  macOS Mojave, inspired by pros but designed for everyone, with Dark Mode, Stacks, easier screenshots, new built-in apps and more.', price: '$3000', brand_id: Brand.find_by(name: 'Apple').id)
Electronic.create(name: 'iMac',
                  image: 'https://media.wired.com/photos/595473c6be605811a2fdd18d/4:3/w_2500,c_limit/imac-gallery-13.jpg', description: 'Overview:
                  iMac performance is at an all-time high with new eighth-generation Intel Core processors; powerful Radeon Pro 500X-series graphics; Thunderbolt 3 (USB-C) connectivity; and stunning Retina 5K displays with 1 billion colours and 500 nits of brightness, for vibrant images and razor-sharp text.
                  Key Features
                  27-inch (diagonal) 5120-by-2880 resolution Retina 5K display
                  Stunning 5-millimetre-thin design
                  6-core eighth-generation Intel Core i5 processor
                  Radeon Pro 570X graphics processor
                  Two Thunderbolt 3 (USB-C) ports
                  802.11ac Wi-Fi
                  Magic Mouse 2
                  Magic Keyboard
                  macOS Mojave, inspired by pros but designed for everyone, with Dark Mode, Stacks, easier screenshots, useful built-in apps and more.', price: '$2000', brand_id: Brand.find_by(name: 'Apple').id)
