require "rspec"
require "lru_cache"


describe LRUCache do 
    subject(:lru_cache) {LRUCache.new(4)}
    
    describe "initialize" do 
        it "should take a number as a size" do 
            lru_cache
        end

        it "should create an empty array for @cache" do 
            expect(lru_cache.instance_variable_get(:@cache)).to eq([])
            expect(lru_cache.instance_variable_get(:@cache)).to be_instance_of(Array)
        end
    end

    describe "count" do 
        it "should return the length of the cache" do 
            expect(lru_cache.count).to eq(0)

            lru_cache.instance_variable_set(:@cache, [1, 3, "hello"])
            expect(lru_cache.count).to eq(3)

            lru_cache.instance_variable_set(:@cache, [1,2,3,4,5,6])
            expect(lru_cache.count).to eq(6)
        end
    end
end