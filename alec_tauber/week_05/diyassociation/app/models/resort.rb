# == Schema Information
#
# Table name: resorts
#
#  id         :integer          not null, primary key
#  name       :text
#  country    :text
#  runs       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Resort < ActiveRecord::Base
end
