require "test_helper"

class BlogControllerTest < ActionDispatch::IntegrationTest
  test "should get blogList" do
    get blog_blogList_url
    assert_response :success
  end
end
