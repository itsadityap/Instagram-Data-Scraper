<img alt="Nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"> <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img alt="Instagram" src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white">

An Instagram scraper Bot built using Node.js and Express.js

To Setup the project, follow the steps below:

-> Clone the repository

-> Run npm install

-> In command line, ```touch .env``` and add the following variables:

```INSTAGRAM_USERNAME=``` (Your Instagram username)

```INSTAGRAM_PASSWORD=``` (Your Instagram password)

-> Run ```npm start``` to start the server

# Instagram Scraper

### Endpoints

* ```/scraper/:username```    
  ```
  {
    "user_name": "priyansh31dec",
    "dataArray": [
        {
            "postImageURL": "https://instagram.fdel27-4.fna.fbcdn.net/v/t51.2885-15/320586958_5587947697994850_5088237070407544077_n.jpg?stp=dst-jpg_e15_p360x360&_nc_ht=instagram.fdel27-4.fna.fbcdn.net&_nc_cat=106&_nc_ohc=4spvFuZUMgwAX-ToDz8&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk5Njc2NzY0NTE1MTcwMzI0NzU1NDk5ODkzNjQ5OTkxMg%3D%3D.2-ccb7-5&oh=00_AfBiKETbQhuWceb67k7FVMqIMznhExXWouKKDR9p2sxuVQ&oe=63B1F03B&_nc_sid=6136e7",
            "locationLat": 28.544474328183,
            "locationLong": 77.272510528564,
            "caption": "Somebody said pehle 3 saal grind karlo fir 4th year mein mauj hai….\nThey were right✌️\n.\n.\n.\n#engineering #fun #2022in60pictures\n#college"
        },
        {
            "postImageURL": "https://instagram.fdel27-4.fna.fbcdn.net/v/t51.2885-15/320520062_844701060128978_8407035138017087163_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fdel27-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=7jMGoixj85MAX-Tu6xv&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk5NjIzMTY0MTM5NzU2Njg0MQ%3D%3D.2-ccb7-5&oh=00_AfDGbZkZa5uoUz7Ysr52NUTwsmjKT_u7Z5EAFs6IyYkUyg&oe=63B16BB7&_nc_sid=6136e7",
            "locationLat": 28.631747,
            "locationLong": 77.219672,
            "caption": "Now that college is ending, I just want to say that I don’t know how I would have survived these 4 years without you all😍\n\nGawaron wali harkate nawabo wala pyar,\nYehi hai dosti humari dekh lo mere yaar."
        },
        {
            "postImageURL": "https://instagram.fdel27-3.fna.fbcdn.net/v/t51.2885-15/318026353_712558216658992_6238928631830133623_n.jpg?stp=dst-jpg_e15_p360x360&_nc_ht=instagram.fdel27-3.fna.fbcdn.net&_nc_cat=104&_nc_ohc=0GObuTOf3HQAX9LG3Dm&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk4NjU3Njg1NzgzNDkzMTc5MQ%3D%3D.2-ccb7-5&oh=00_AfBDaw00qekRlLTVBC0kVX6upIPZO359cWbl6odv2AxTJA&oe=63B1EC1F&_nc_sid=6136e7",
            "caption": "TLE Eliminators 6.0 | Major Announcement | Competitive Programming Course\n\nWebsite: https://tle-eliminators.com"
        },
        {
            "postImageURL": "https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-15/311636367_116432704571641_2959397851885182057_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=NM9xmy6ovQcAX_7UIqd&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk0OTQ3NDc0ODk5ODY1MzE0Nw%3D%3D.2-ccb7-5&oh=00_AfCNTdIiGwIPVS0i6nN7w-Ut10m1II6yRROsIhW8hUGkeQ&oe=63B1B8AF&_nc_sid=6136e7",
            "locationLat": 28.629981166157,
            "locationLong": 77.372056572998,
            "caption": "Offline public speaking is love."
        },
        {
            "postImageURL": "https://instagram.fdel27-5.fna.fbcdn.net/v/t51.2885-15/311048354_801092371137166_6694051081520656988_n.webp?se=8&stp=dst-jpg_e35&_nc_ht=instagram.fdel27-5.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mgSCWm3LZpEAX9EKts0&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk0NTg3NDAyMDAzMzU5NjkwMg%3D%3D.2-ccb7-5&oh=00_AfDv-1w9txpUuc-IHKE0bwYCs7sySYk1g0NScWXvaYWHDg&oe=63B335D7&_nc_sid=6136e7",
            "caption": "ICPC 2021 Regionals come to an end.\nHad heard some competitive programmers saying that ICPC was one of their most cherished memories from college. Undoubtedly, these 2 weeks are going to be remembered for long. \n\nHere's team PGP signing off... Until next year I guess 😜\n\n#icpc #icpcnews #amrita #kanpur #regionals2021 #regionals2022 #iiitdelhi"
        },
        {
            "locationLat": 9.1344176598031,
            "locationLong": 76.459265425112,
            "caption": "I wasn’t lying when I said Competitive Programming can take you places.\nFirst beach visit done right😇"
        },
        {
            "postImageURL": "https://instagram.fdel27-3.fna.fbcdn.net/v/t51.2885-15/310963875_2136978473150224_6120008306866185730_n.webp?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fdel27-3.fna.fbcdn.net&_nc_cat=104&_nc_ohc=vqNH4Pmru74AX9he2Me&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk0NTIwNDU0NDEzNTI0MzEwMA%3D%3D.2-ccb7-5&oh=00_AfCnGK8VxY2rTpdQkIsS8QXunXYmk_HF947nyAGu0TsUrg&oe=63B2EA2D&_nc_sid=6136e7",
            "locationLat": 9.5883959,
            "locationLong": 76.5362996,
            "caption": "Haathi mera saathi 🤝"
        },
        {
            "postImageURL": "https://instagram.fdel27-3.fna.fbcdn.net/v/t51.2885-15/309887249_1032509094065828_1497813782295144776_n.webp?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fdel27-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3A8X3ge4QmwAX-3baTt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjkzNzQ2MzQ2MTgxMjUwNTYwNA%3D%3D.2-ccb7-5&oh=00_AfC24q-C9XvrfbVSLV5lzyVDmCZiBLD9ahmAAhjkCmjL-A&oe=63B18804&_nc_sid=6136e7",
            "locationLat": 28.517310956,
            "locationLong": 77.199817343,
            "caption": "Everybody said it was post worthy so here it is ❤️❤️\n.\n.\n.\nPc: @deepalii_28 🥰"
        },
        {
            "locationLat": 28.544474328183,
            "locationLong": 77.272510528564,
            "caption": ".\n1. Finding shortest path in a graph💪\n2. Finding shortest path to her heart💀"
        },
        {
            "caption": "Today was a good day. Kinda proud of myself. Super grateful for everything that happened in the last 2 years. Also, I kind of enjoy looking like a kid, don't want to grow up any further. I don't know what I am writing xD.\n.\n.\n.\nPicture credits: @deepalii_28 ❤️"
        },
        {
            "locationLat": 28.544474328183,
            "locationLong": 77.272510528564,
            "caption": "Last year of college is going to be all about clicking pictures♥️\n\nAlso, @_shailagya_'s phone => awesome pictures"
        },
        {
            "locationLat": 23.156473503662,
            "locationLong": 72.667371080436,
            "caption": "First offline seminar done right. \nHad an amazing experience talking about competitive programming and side hustles at PDEU Gandhinagar. Thanks @codedrella for inviting and managing everything so well."
        },
        {
            "postImageURL": "https://instagram.fdel27-2.fna.fbcdn.net/v/t51.2885-15/298639975_473435840890769_8879636545146796820_n.jpg?se=8&stp=dst-jpg_e35&_nc_ht=instagram.fdel27-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=c1dcbHW8kR0AX_hXU6a&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjkwMjY2NTcyMDg2ODI5ODgxMg%3D%3D.2-ccb7-5&oh=00_AfBmdtnZ57sOsEvY2Qu4WUgbZKeSxivfcBCiXuzzqsA3IQ&oe=63B2A87A&_nc_sid=6136e7",
            "caption": "PRESENTING the fabulous founder of TLE Eliminators. Here is ONLY A GLIMPSE of his achievements.\n@priyansh31dec \nCompetitive Programmer + YouTuber + Educator\n#competitiveprogramming #coding #engineering #coderlife #engineeringstudent #codingninjas\n\n—\nThe next batch of TLE Eliminators starts 18th August 2022 !!"
        },
        {
            "postImageURL": "https://instagram.fdel27-3.fna.fbcdn.net/v/t51.2885-15/292490625_1099159417691144_9079212979970433223_n.webp?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fdel27-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=wGH5Ut30rv0AX-Yvh-z&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg3NzE3MDgzMTE5NzUwNzE4Mg%3D%3D.2-ccb7-5&oh=00_AfCDaWP1tL5RrNdndPoTpaQY4pLyQiSvrtTDqBQ-sGJIKQ&oe=63B193B6&_nc_sid=6136e7",
            "locationLat": 12.937026,
            "locationLong": 77.688866,
            "caption": "Kitna bhi try karlo Priyansh, saare coding test nahi de paoge🥲\n.\n.\n.\nPic and caption credits: @anoushkanarang_ 🥰🥰"
        },
        {
            "locationLat": 12.971117,
            "locationLong": 77.597645,
            "caption": "Goldman Sachs Internship summed up in a few pictures."
        },
        {
            "postImageURL": "https://instagram.fdel27-2.fna.fbcdn.net/v/t51.2885-15/280561039_369819515101097_5035891526251278396_n.webp?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fdel27-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0SlVbuhDMnQAX_j32q7&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjgzNTI4MTM2Njk4NjU0OTM4Nw%3D%3D.2-ccb7-5&oh=00_AfCtL2lcxB0adJTijAIVc9-3ztSWbU_Wg6nBph_TfLc8Fw&oe=63B2E935&_nc_sid=6136e7",
            "locationLat": 28.54525,
            "locationLong": 77.19914,
            "caption": "Caption this picture🤭\n.\n.\nPC: @_shailagya_ 🥰"
        },
        {
            "postImageURL": "https://instagram.fdel27-4.fna.fbcdn.net/v/t51.2885-15/279275420_766267234317294_6094211890105779162_n.webp?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fdel27-4.fna.fbcdn.net&_nc_cat=106&_nc_ohc=jvwIYz2k3TMAX9UP0wP&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjgyNTkxMzMwOTY5ODUzMDYzMw%3D%3D.2-ccb7-5&oh=00_AfD37JldQWZzgHGMgpZ_12zf0jb7XiGxhXglxV3C55xFgg&oe=63B1AC33&_nc_sid=6136e7",
            "locationLat": 28.544474328183,
            "locationLong": 77.272510528564,
            "caption": "Can you spot the linked list?\n.\n.\n.\nPC: @shivam.agrawallll"
        },
        and so on...
    ]
  ```
  



* ```/scraper/:username/:postcount```    
  
  You can find more posts and their details by using this endpoint.

  This endpoint return details of specifc amount of posts.The response is similar to the one above. Useful for accounts with large amount of posts.
  
  This endpoints automatically handles pagination and returns the required number of posts.