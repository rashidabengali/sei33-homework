class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # You only need this for hand written forms (don't do that).
end
