require 'rails_helper'

RSpec.describe Api::V1::PostsController, type: :controller do
  describe "#index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "#show" do
    it "returns http success" do
      post = Post.create(title: "hi", body: "Mom")
      get :show, id: post.id
      expect(response).to have_http_status(:success)
    end
  end
end
