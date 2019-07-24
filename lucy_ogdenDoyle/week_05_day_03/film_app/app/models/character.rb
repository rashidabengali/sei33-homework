# == Schema Information
#
# Table name: characters
#
#  id          :bigint           not null, primary key
#  name        :text
#  voice_actor :text
#  image       :text
#  movie_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Character < ActiveRecord::Base
  belongs_to :movie, :optional => true
end
