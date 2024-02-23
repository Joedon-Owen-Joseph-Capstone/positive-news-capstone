import {Post} from "@/app/shared/Post";

export const articleImage = 'https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png';

export function Posts() {

    let articles = [
        {
            articleId: '0d4863c7-487d-4936-872c-5169dc0bc68b',
            articleImage: 'https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png',
            articleTitle: "Analysis | How Xi’s Unquestioned Grip On China Fuels Economic Unease - WorldNewsEra",
            articleDescription: 'One worry is that with more centralization of decision-making, it could be harder to correct policy mistakes. At the congress, Xi broke with a decades-old system for orderly succession intended to prevent a repeat of Mao’s turbulent, 27-year rule. He also surrounded himself exclusively with close allies and sidelined alternative voices. The congress reinforced fears that Xi would continue his campaign to constrain the private sector.'
        },
        {
            articleId: '0d4863c7-487d-4936-872c-5169dc0bc68b',
            articleImage: '"https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39/0x0.jpg"',
            articleTitle: "Analysis | How Xi’s Unquestioned Grip On China Fuels Economic Unease - WorldNewsEra",
            articleDescription: 'One worry is that with more centralization of decision-making, it could be harder to correct policy mistakes. At the congress, Xi broke with a decades-old system for orderly succession intended to prevent a repeat of Mao’s turbulent, 27-year rule. He also surrounded himself exclusively with close allies and sidelined alternative voices. The congress reinforced fears that Xi would continue his campaign to constrain the private sector.'
        },
        {
            articleId: '0d4863c7-487d-4936-872c-5169dc0bc68b',
            articleImage: 'https://imageio.forbes.com/specials-images/imageserve/64b95d25627182633b37566c/0x0.jpg',
            articleTitle: "Analysis | How Xi’s Unquestioned Grip On China Fuels Economic Unease - WorldNewsEra",
            articleDescription: 'One worry is that with more centralization of decision-making, it could be harder to correct policy mistakes. At the congress, Xi broke with a decades-old system for orderly succession intended to prevent a repeat of Mao’s turbulent, 27-year rule. He also surrounded himself exclusively with close allies and sidelined alternative voices. The congress reinforced fears that Xi would continue his campaign to constrain the private sector.'
        },
        {
            articleId: '0d4863c7-487d-4936-872c-5169dc0bc68b',
            articleImage: 'https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png',
            articleTitle: "Analysis | How Xi’s Unquestioned Grip On China Fuels Economic Unease - WorldNewsEra",
            articleDescription: 'One worry is that with more centralization of decision-making, it could be harder to correct policy mistakes. At the congress, Xi broke with a decades-old system for orderly succession intended to prevent a repeat of Mao’s turbulent, 27-year rule. He also surrounded himself exclusively with close allies and sidelined alternative voices. The congress reinforced fears that Xi would continue his campaign to constrain the private sector.'
        },
        {
            articleId: '0d4863c7-487d-4936-872c-5169dc0bc68b',
            articleImage: 'https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png',
            articleTitle: "Analysis | How Xi’s Unquestioned Grip On China Fuels Economic Unease - WorldNewsEra",
            articleDescription: 'One worry is that with more centralization of decision-making, it could be harder to correct policy mistakes. At the congress, Xi broke with a decades-old system for orderly succession intended to prevent a repeat of Mao’s turbulent, 27-year rule. He also surrounded himself exclusively with close allies and sidelined alternative voices. The congress reinforced fears that Xi would continue his campaign to constrain the private sector.'
        },
        {
            articleId: '0d4863c7-487d-4936-872c-5169dc0bc68b',
            articleImage: 'https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png',
            articleTitle: "Analysis | How Xi’s Unquestioned Grip On China Fuels Economic Unease - WorldNewsEra",
            articleDescription: 'One worry is that with more centralization of decision-making, it could be harder to correct policy mistakes. At the congress, Xi broke with a decades-old system for orderly succession intended to prevent a repeat of Mao’s turbulent, 27-year rule. He also surrounded himself exclusively with close allies and sidelined alternative voices. The congress reinforced fears that Xi would continue his campaign to constrain the private sector.'
        }

    ]

    return (
        <>
        <section className="container mx-auto">

            {/* All posts layout */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.map((article, index) => <Post key={article.articleId} article={article}/>)}
            </div>
        </section>
        </>
    )
}
