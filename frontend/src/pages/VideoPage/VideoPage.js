import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoMapper from "../../components/VideoMapper";
import './VideoPage.css'

const VideoPage = () => {
    const [videos, setVideos] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "zlpzHQAFvSGGg3TsHg8HO4b1Tfc",
            "id": {
                "kind": "youtube#video",
                "videoId": "bEbF7EJYfLU"
            },
            "snippet": {
                "publishedAt": "2022-12-16T04:56:10Z",
                "channelId": "UC6JhCqFwuSBJfseypJ2HZMw",
                "title": "New Funny Videos 2022 😍 Cutest Cats and Dogs 🐱🐶 Part37",
                "description": "New Funny Videos 2022 😍 Cutest Cats and Dogs 🐱🐶 Part37\nhttps://youtu.be/bEbF7EJYfLU",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bEbF7EJYfLU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bEbF7EJYfLU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bEbF7EJYfLU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/bEbF7EJYfLU/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/bEbF7EJYfLU/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Cute AniTv",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-16T04:56:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "TCXgeltnuNCIiccUhNLkTm3ttIE",
            "id": {
                "kind": "youtube#video",
                "videoId": "JLQrECufCSk"
            },
            "snippet": {
                "publishedAt": "2023-03-09T09:21:58Z",
                "channelId": "UCTCOnxnWsjYiFByBqTJbLOw",
                "title": "The Best Robot Vacuum Cleaner Test Verefa L11 Pro",
                "description": "I tested the new robot vacuum cleaner Verefa L11 Pro. 😺\nThe L11 Pro provides \"70 days hands-free cleaning\", is of great price value. Integrated the LiDar sensor, can recognize your home layout with down to millimeter level accuracy. 📐\nGreat for homes with carpet flooring. The Auto Boost coupled with a maximum of 2700Pa super strong suction power to make sure the robot vacuum does away with the hard-to-handle pet furs, pieces, and particles messed in the carpet.\nWith the Verefa Life App, you can give all kinds of cleaning commands. It also comes with a map function, where you can oversee real-time cleaning. 📲\nHosico recommends! ⭐️⭐️⭐️⭐️⭐️\nOfficial Website: https://dada.link/YnOj6z, discount code: verefa, 10% OFF;\nAmazon Link: https://dada.link/p0wWtq, coupon: $100.\n\n\n\nMusic from Epidemic Sound: That's Peanuts (60s Pop Version) - Mike Franklyn https://www.epidemicsound.com\n\nSubscribe to our YouTube channel for more cat videos: https://YouTube.com/hosicocats\n\nWebsite: http://hosicocat.com\nInstagram: https://instagram.com/hosico_cat/\nFacebook: https://facebook.com/thehosicocat/\nTwitter: https://twitter.com/Hosico_cat\nWeibo: https://weibo.com/u/6275294458\nTikTok: https://www.tiktok.com/@hosico_cat\nVK: https://vk.com/public163991275\nLikee: https://likee.com/@412891457\nTelegram: https://t.me/ihosico",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/JLQrECufCSk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/JLQrECufCSk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/JLQrECufCSk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/JLQrECufCSk/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/JLQrECufCSk/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Hosico Cat",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-09T09:21:58Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "TgmfbtAx3UpF82HBIskjh0NlGJo",
            "id": {
                "kind": "youtube#video",
                "videoId": "tBpOdJ_G-sQ"
            },
            "snippet": {
                "publishedAt": "2018-04-24T19:37:25Z",
                "channelId": "UCFNsgMgBHKhYLihk9OUCF-Q",
                "title": "Fun Pet Care Game - Little Kitten Adventures (New Update) - Play Costume Dress-Up Party Gamepaly",
                "description": "Little Kitten Adventures - Fun Learning Games For Children \nBy Fox and Sheep GmbH\n\n*****************************************************************\nClick Here To Subscribe ArcadeGaming! ►https://goo.gl/x5MhV9\n\n► PLAYLIST: https://goo.gl/6hzDFf\n*****************************************************************\n➔ Download Link \nPlay iOS : https://goo.gl/fCbj7k\n\nHow exciting! Little Kitten gets invited to a Dress-Up Party! ...but the way there is full of little incidents waiting to happen. Pack Little Kitten's backpack to make it to the party safely. Can you remember every item he needs? Don't worry, if things go wrong Little Kitten will always come back so you can care for him: Cool his bruises, clean and dry him, draw him a map, give him his costume... with your help he'll make it!\n\nWhat's New:\n- FREE new funny bow tie washing machine animation\n- FREE new Hide&Seek biscuits in the cupboard bonus game\n- 3 exciting new In App Purchase options: RAIN mini game, Kitten Funny PHOTOS, PREMIUM big pack\n- A cute new icon ;-)",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/tBpOdJ_G-sQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/tBpOdJ_G-sQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/tBpOdJ_G-sQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/tBpOdJ_G-sQ/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/tBpOdJ_G-sQ/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "ArcadeGaming",
                "liveBroadcastContent": "none",
                "publishTime": "2018-04-24T19:37:25Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "heGrVvJFLFsJMEpttwBhCBIJMlE",
            "id": {
                "kind": "youtube#video",
                "videoId": "FLWkAuGrhWo"
            },
            "snippet": {
                "publishedAt": "2022-12-15T09:10:55Z",
                "channelId": "UCuKD6YOChObHQkSbTPiJSnA",
                "title": "Hosico Cat play with VETRESKA Pine Cat Tree",
                "description": "Finally a Christmas tree made for our feline friends! 🐱🎄Look how @hosico_cat decorating his VETRESKA Christmas tree!\n\nHand woven using natural jute ropes, they can scratch, climb and play tag on it. Easy to assemble with festive ornaments included.\n\nRemember, Christmas is the time of giving! Who better to give a gift to than your best furry friend.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FLWkAuGrhWo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FLWkAuGrhWo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FLWkAuGrhWo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/FLWkAuGrhWo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/FLWkAuGrhWo/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "VETRESKA",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-15T09:10:55Z"
            }
        }
    ]);


     return (
        <div className="mainpage">
            <div>
                <SearchBar />
            </div>
            <div className="container">
                <div className="homepage">
                    <VideoPlayer />
                    <VideoMapper videoArray={videos}/>
                </div>
            </div>
        </div>
    )

}

export default VideoPage
