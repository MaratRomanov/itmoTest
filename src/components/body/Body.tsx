import React from 'react';
import {
    Wrapper,
    Content,
    Title,
    CardsContainer,
    ErrorText,
} from './Body.styled';
import Card from './card/Card';
import NewsPage from './newsPage/NewsPage';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import '../../files/fontMuller.css';

const Body: React.FC = () => {
    const {news, error, loading, language, card} = useTypedSelector((state) => state.news);

    let locale: string = language === 1 ? 'ru' : 'en';
    let titleText: string = language === 1 ? 'Новости и события' : 'News and events';

    if (error) {
        return <ErrorText>
            {error}
        </ErrorText>
    }

    if (news[0]?.code === 1) {
        return <ErrorText>
            {news[0].info}
        </ErrorText>
    }

    const fill = (size: number, value: string) => new Array(size).fill(value);

    return (
        <Wrapper>
            {
                card.isOpen
                    ? <NewsPage/>
                    : <Content>
                        <Title>
                            {titleText}
                        </Title>
                        <CardsContainer>
                            {
                                loading
                                    ? fill(9, '').map((item: any, index) => <Card
                                        key={index}
                                        itemLoading={loading}
                                        itemLanguage={locale}
                                    />)
                                    : news[0]?.news.map((item: any) => <Card
                                            key={item.id}
                                            itemImageBig={item.image_big}
                                            itemDate={item.date}
                                            itemTitle={item.title}
                                            itemLanguage={locale}
                                            itemUrl={item.url}
                                        />
                                    )
                            }
                        </CardsContainer>
                    </Content>
            }
        </Wrapper>
    );
}

export default Body;
