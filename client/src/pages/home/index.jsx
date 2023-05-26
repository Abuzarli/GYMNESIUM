import {Helmet} from 'react-helmet'
import style from './index.module.css'
import { Grid } from '@mui/material';

const HOME = () => {
  return (
    <>
    <Helmet>
    <title>HOMEPAGE</title>
    <meta charset="utf-8" />
    </Helmet>

    <section>
        {/* SECTION 1 */}
        <section className={style.section_1}>
            <h1  className={style.section_1_title}>REAL FITNESS 
                <br />
                DEPENDS ON EXERCISE</h1>
                <p className={style.section_1_text}>SHAPE YOUR BODY WELL.</p>
        </section>

        {/* SECTION 2 */}
        <section className={style.section_2}>
            <div className={style.section_2_content}>
            <h1 className={style.section_2_title}>We care about what we offer</h1>
            <p className={style.section_2_text}>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={style.section_2_crd}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <div className={style.section_2_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/o1.png" alt="" />
                        <h4>Regular Exercise</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={style.section_2_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/o2.png" alt="" />
                        <h4>Training on the go</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={style.section_2_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/o3.png" alt="" />
                        <h4>Body Building Packages</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </Grid>
            </Grid>
            </div>
        </section>

        {/* SECTION 3 */}
        <section className={style.section_3}>
            <div className={style.section_3_content}>
            <h1 className={style.section_3_title}>Top Courses That are open for Students</h1>
            <p className={style.section_3_text}>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className={style.section_3_cards}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <div className={style.section_3_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/c1.jpg" alt="" />
                        <div className={style.section_3_card_content}>
                        <h4>Running Classes</h4>
                        <h4 className={style.card_price}>$275</h4>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={style.section_3_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/c2.jpg" alt="" />
                        <div className={style.section_3_card_content}>
                        <h4>Running Classes</h4>
                        <h4 className={style.card_price}>$275</h4>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={style.section_3_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/c3.jpg" alt="" />
                        <div className={style.section_3_card_content}>
                        <h4>Running Classes</h4>
                        <h4 className={style.card_price}>$275</h4>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={style.section_3_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/c4.jpg" alt="" />
                        <div className={style.section_3_card_content}>
                        <h4>Running Classes</h4>
                        <h4 className={style.card_price}>$275</h4>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={style.section_3_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/c5.jpg" alt="" />
                        <div className={style.section_3_card_content}>
                        <h4>Running Classes</h4>
                        <h4 className={style.card_price}>$275</h4>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={style.section_3_cards}>
                        <img src="https://preview.colorlib.com/theme/gym/img/c6.jpg" alt="" />
                        <div className={style.section_3_card_content}>
                        <h4>Running Classes</h4>
                        <h4 className={style.card_price}>$275</h4>
                        </div>
                    </div>
                </Grid>

                </Grid>

            </div>
        </section>
    </section>

    </>
  )
}

export default HOME
