require 'rails_helper'

RSpec.describe PhotosController, type: :controller do
  describe "#index" do
    it "returns http success" do
      get :index, post_id: 1
      expect(response).to have_http_status(:success)
    end
  end
end
