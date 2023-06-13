require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get About_Us" do
    get pages_About_Us_url
    assert_response :success
  end

  test "should get Product" do
    get pages_Product_url
    assert_response :success
  end

  test "should get Contact_us" do
    get pages_Contact_us_url
    assert_response :success
  end
end
