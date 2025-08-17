import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Award, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DSAApplicationForm from '@/components/forms/DSAApplicationForm';

const JoinDSA = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'High Commission',
      description: 'Earn up to 1% commission on loan disbursals',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: 'Growth Opportunities',
      description: 'Build your own team and earn override commissions',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support',
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Recognition',
      description: 'Performance-based incentives and awards',
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: 'Flexible Hours',
      description: 'Work at your own pace and schedule',
    },
  ];

  const requirements = [
    'Minimum 12th pass (Graduate preferred)',
    'Good communication skills in local language',
    'Basic understanding of financial products',
    'Willingness to learn and grow',
    'Local market knowledge',
    'Own vehicle preferred',
  ];

  return (
    <>
      <Helmet>
        <title>Join as DSA Partner - Earn High Commission in Maharashtra | PhoenixStar Distribution</title>
        <meta name="description" content="Join PhoenixStar Distribution Services as DSA partner in Maharashtra. Earn high commission, get training & support. Apply now to become loan consultant in Omerga, Dharashiv." />
        <meta name="keywords" content="DSA partner Maharashtra, loan consultant job, financial advisor opportunity, commission based job Omerga, DSA registration" />
        <meta property="og:title" content="Join as DSA Partner - Earn High Commission in Maharashtra | PhoenixStar Distribution" />
        <meta property="og:description" content="Join PhoenixStar Distribution Services as DSA partner in Maharashtra. Earn high commission, get training & support. Apply now to become loan consultant in Omerga, Dharashiv." />
      </Helmet>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join as DSA Partner</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Start your journey as a financial consultant and earn attractive commissions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Join PhoenixStar?</h2>
            <p className="text-xl text-slate-600">
              Unlock your earning potential with our DSA partnership program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Become a Certified DSA Partner
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Join our network of successful DSA partners across Maharashtra. We provide complete 
                training, marketing support, and technology tools to help you succeed in the 
                financial services industry.
              </p>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-slate-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img   
                className="rounded-2xl shadow-xl w-full" 
                alt="DSA partner training session at PhoenixStar Distribution Services" src="https://images.unsplash.com/photo-1637743409275-60e66d27f85a" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="text-3xl">DSA Partner Application</CardTitle>
                <p className="text-green-100">Fill in your details to join our team</p>
              </CardHeader>
              <CardContent className="p-8">
                <DSAApplicationForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Commission Structure</h2>
            <p className="text-xl text-slate-600">
              Attractive commission rates for all loan products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { product: 'Home Loans', commission: '0.5% - 1%', color: 'from-blue-50 to-blue-100' },
              { product: 'Personal Loans', commission: '1% - 2%', color: 'from-green-50 to-green-100' },
              { product: 'Business Loans', commission: '0.75% - 1.5%', color: 'from-purple-50 to-purple-100' },
              { product: 'LAP', commission: '0.5% - 1%', color: 'from-orange-50 to-orange-100' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`text-center border-0 shadow-lg bg-gradient-to-br ${item.color}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.product}</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">{item.commission}</div>
                    <p className="text-slate-600 text-sm">On loan amount</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinDSA;