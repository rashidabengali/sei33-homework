# == Schema Information
#
# Table name: movies
#
#  id           :bigint           not null, primary key
#  title        :text
#  date_release :date
#  image        :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Movie < ActiveRecord::Base
end
