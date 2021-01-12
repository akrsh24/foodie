import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import "./DineCategory.scss";

const DineCategory = () => {
    return (
        <article className="dine-category-container">
            <section>
                <Card
                    hoverable
                    style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    cover={<img alt="order-online" src={process.env.PUBLIC_URL + "/assets/images/order_online.jpg"} style={{ borderRadius: "15px 15px 0 0" }} />}
                >
                    <Meta title="Order Food Online" className="dine-category-meta" />
                </Card>
            </section>
            <section>
                <Card
                    hoverable
                    style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    cover={<img alt="go-out-for-meal" src={process.env.PUBLIC_URL + "/assets/images/go_out_meal.jpg"} style={{ borderRadius: "15px 15px 0 0" }} />}
                >
                    <Meta title="Go out for a meal" className="dine-category-meta" />
                </Card>
            </section>
            <section>
                <Card
                    hoverable
                    style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    cover={<img alt="night-life" src={process.env.PUBLIC_URL + "/assets/images/night_life.jpg"} style={{ borderRadius: "15px 15px 0 0" }} />}
                >
                    <Meta title="Night Life" className="dine-category-meta" />
                </Card>
            </section>
            <section>
                <Card
                    hoverable
                    style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                    cover={<img alt="foodie-pro" src={process.env.PUBLIC_URL + "/assets/images/foodie_pro.jpg"} style={{ borderRadius: "15px 15px 0 0" }} />}
                >
                    <Meta title="Pro Services" className="dine-category-meta" />
                </Card>
            </section>
        </article>
    );
}

export default DineCategory;