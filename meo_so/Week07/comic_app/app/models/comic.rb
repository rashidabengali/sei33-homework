# == Schema Information
#
# Table name: comics
#
#  id           :bigint           not null, primary key
#  name         :text
#  publish_year :integer
#  ended        :boolean
#  image        :text
#

class Comic < ActiveRecord::Base
    belongs_to :author, :optional => true
end
