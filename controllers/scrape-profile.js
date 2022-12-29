require("dotenv").config();
const { IgApiClient } = require('instagram-private-api');
const ig = new IgApiClient();

async function scrapeProfile(req, res) {

    const username = req.params.username;
    
    ig.state.generateDevice(process.env.INSTAGRAM_USERNAME)
        
    try 
    {
        await ig.simulate.preLoginFlow();
        
        const user = await ig.account.login(process.env.INSTAGRAM_USERNAME,process.env.INSTAGRAM_PASSWORD)

        const userSearch = await ig.search.users(username.toString());

        const userpk = userSearch[0].pk;
        const userFeeds = ig.feed.user(userpk);
        const myPostsFirstPage = await userFeeds.items();    

        let dataArray = []
        let user_name = ''

        for(let i = 0; i < myPostsFirstPage.length; i++)
        {   
            user_name = userSearch[0].username;
            console.log(user_name);

            let data = {
                postURL : myPostsFirstPage[i]?.image_versions2?.candidates[0]?.url,
                locationLat : myPostsFirstPage[i]?.location?.lng,
                locationLong : myPostsFirstPage[i]?.location?.lat,
                caption : myPostsFirstPage[i]?.caption?.text
            }
            dataArray.push(data);
        }

        res.status(200).json({user_name, dataArray});
    }
    catch (err)
    {
        console.log(err);
        res.status(404).json({
            message: 'The Page is not Public or something else went wrong internally!!!',
            error: err
        });
    }

}

module.exports = {
    scrapeProfile
};