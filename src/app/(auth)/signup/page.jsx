"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { auth, profiles } from "@/lib/api";
import { useRouter } from "next/navigation";
import BackgroundEffects from "@/app/about/components/BackgroundEffects";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    countryCode: "+211",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    const payload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim()
        ? `${formData.countryCode}${formData.phone.trim()}`
        : null,
      password: formData.password,
    };

    try {
      // ✅ 1. Create account using auth API
      const { user, error } = await auth.signUp(
        payload.email,
        payload.password,
        {
          first_name: payload.first_name,
          last_name: payload.last_name,
          phone: payload.phone,
        }
      );

      if (error) {
        console.error("❌ SignUp Error:", error.message);
        alert(error.message);
        return;
      }

      console.log("✅ Registered:", user);

      // ✅ 2. Create profile using profiles API
      if (user) {
        const { error: profileError } = await profiles.createProfile(user.id, {
          first_name: payload.first_name,
          last_name: payload.last_name,
          phone: payload.phone,
          email: payload.email,
          role: "user",
        });

        if (profileError) {
          console.error("❌ Error creating profile:", profileError.message);
        } else {
          console.log("✅ Profile created successfully");
        }
      }

      // ✅ 3. Notify user and redirect
      alert(
        "🎉 Registration successful! Please check your email to verify your account."
      );

      router.push("/login");
    } catch (err) {
      console.error("❌ Unexpected error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black flex items-center justify-center px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20" />
      </div>
      <BackgroundEffects />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-lg"
      >
        <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-purple-500/20 shadow-2xl">
          <div className="flex justify-center mb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <Image
                src="/images/hash-main.png"
                alt="Hash Solutions"
                width={200}
                height={70}
                priority
                className="drop-shadow-2xl relative z-10"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First name"
                  className="cursor-target cursor-pointer w-full pl-10 pr-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
              </div>

              <div className="relative group">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="cursor-target cursor-pointer w-full pl-10 pr-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
              </div>
            </div>

            <div className="relative group">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="cursor-target cursor-pointer w-full pl-10 pr-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
              />
            </div>

            <div className="relative group">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg z-10" />
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="cursor-target cursor-pointer w-46 pl-10 pr-2 py-3 bg-black border border-purple-500/30 rounded-xl text-white text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 appearance-none"
                >
                  <option value="211">South Sudan +211</option>
                  <option value="93">Afghanistan +93</option>
                  <option value="358">Aland Islands +358</option>
                  <option value="355">Albania +355</option>
                  <option value="213">Algeria +213</option>
                  <option value="1684">American Samoa +1684</option>
                  <option value="376">Andorra +376</option>
                  <option value="244">Angola +244</option>
                  <option value="1264">Anguilla +1264</option>
                  <option value="672">Antarctica +672</option>
                  <option value="1268">Antigua and Barbuda +1268</option>
                  <option value="54">Argentina +54</option>
                  <option value="374">Armenia +374</option>
                  <option value="297">Aruba +297</option>
                  <option value="61">Australia +61</option>
                  <option value="43">Austria +43</option>
                  <option value="994">Azerbaijan +994</option>
                  <option value="1242">Bahamas +1242</option>
                  <option value="973">Bahrain +973</option>
                  <option value="880">Bangladesh +880</option>
                  <option value="1246">Barbados +1246</option>
                  <option value="375">Belarus +375</option>
                  <option value="32">Belgium +32</option>
                  <option value="501">Belize +501</option>
                  <option value="229">Benin +229</option>
                  <option value="1441">Bermuda +1441</option>
                  <option value="975">Bhutan +975</option>
                  <option value="591">Bolivia +591</option>
                  <option value="387">Bosnia and Herzegovina +387</option>
                  <option value="267">Botswana +267</option>
                  <option value="55">Bouvet Island +55</option>
                  <option value="55">Brazil +55</option>
                  <option value="673">Brunei Darussalam +673</option>
                  <option value="359">Bulgaria +359</option>
                  <option value="226">Burkina Faso +226</option>
                  <option value="257">Burundi +257</option>
                  <option value="855">Cambodia +855</option>
                  <option value="237">Cameroon +237</option>
                  <option value="1">Canada +1</option>
                  <option value="238">Cape Verde +238</option>
                  <option value="1345">Cayman Islands +1345</option>
                  <option value="236">Central African Republic +236</option>
                  <option value="235">Chad +235</option>
                  <option value="56">Chile +56</option>
                  <option value="86">China +86</option>
                  <option value="61">Christmas Island +61</option>
                  <option value="672">Cocos Islands +672</option>
                  <option value="57">Colombia +57</option>
                  <option value="269">Comoros +269</option>
                  <option value="242">Congo +242</option>
                  <option value="242">
                    Democratic Republic of the Congo +242
                  </option>
                  <option value="682">Cook Islands +682</option>
                  <option value="506">Costa Rica +506</option>
                  <option value="225">Cote D'Ivoire +225</option>
                  <option value="385">Croatia +385</option>
                  <option value="53">Cuba +53</option>
                  <option value="599">Curacao +599</option>
                  <option value="357">Cyprus +357</option>
                  <option value="420">Czech Republic +420</option>
                  <option value="45">Denmark +45</option>
                  <option value="253">Djibouti +253</option>
                  <option value="1767">Dominica +1767</option>
                  <option value="1809">Dominican Republic +1809</option>
                  <option value="593">Ecuador +593</option>
                  <option value="20">Egypt +20</option>
                  <option value="503">El Salvador +503</option>
                  <option value="240">Equatorial Guinea +240</option>
                  <option value="291">Eritrea +291</option>
                  <option value="372">Estonia +372</option>
                  <option value="251">Ethiopia +251</option>
                  <option value="500">Falkland Islands (Malvinas) +500</option>
                  <option value="298">Faroe Islands +298</option>
                  <option value="679">Fiji +679</option>
                  <option value="358">Finland +358</option>
                  <option value="33">France +33</option>
                  <option value="594">French Guiana +594</option>
                  <option value="689">French Polynesia +689</option>
                  <option value="262">French Southern Territories +262</option>
                  <option value="241">Gabon +241</option>
                  <option value="220">Gambia +220</option>
                  <option value="995">Georgia +995</option>
                  <option value="49">Germany +49</option>
                  <option value="233">Ghana +233</option>
                  <option value="350">Gibraltar +350</option>
                  <option value="30">Greece +30</option>
                  <option value="299">Greenland +299</option>
                  <option value="1473">Grenada +1473</option>
                  <option value="590">Guadeloupe +590</option>
                  <option value="1671">Guam +1671</option>
                  <option value="502">Guatemala +502</option>
                  <option value="44">Guernsey +44</option>
                  <option value="224">Guinea +224</option>
                  <option value="245">Guinea-Bissau +245</option>
                  <option value="592">Guyana +592</option>
                  <option value="509">Haiti +509</option>
                  <option value="39">Holy See (Vatican City State) +39</option>
                  <option value="504">Honduras +504</option>
                  <option value="852">Hong Kong +852</option>
                  <option value="36">Hungary +36</option>
                  <option value="354">Iceland +354</option>
                  <option value="91">India +91</option>
                  <option value="62">Indonesia +62</option>
                  <option value="98">Iran, Islamic Republic of +98</option>
                  <option value="964">Iraq +964</option>
                  <option value="353">Ireland +353</option>
                  <option value="44">Isle of Man +44</option>
                  <option value="972">Israel +972</option>
                  <option value="39">Italy +39</option>
                  <option value="1876">Jamaica +1876</option>
                  <option value="81">Japan +81</option>
                  <option value="44">Jersey +44</option>
                  <option value="962">Jordan +962</option>
                  <option value="7">Kazakhstan +7</option>
                  <option value="254">Kenya +254</option>
                  <option value="686">Kiribati +686</option>
                  <option value="82">Korea, Republic of +82</option>
                  <option value="381">Kosovo +381</option>
                  <option value="965">Kuwait +965</option>
                  <option value="996">Kyrgyzstan +996</option>
                  <option value="371">Latvia +371</option>
                  <option value="961">Lebanon +961</option>
                  <option value="266">Lesotho +266</option>
                  <option value="231">Liberia +231</option>
                  <option value="218">Libyan Arab Jamahiriya +218</option>
                  <option value="423">Liechtenstein +423</option>
                  <option value="370">Lithuania +370</option>
                  <option value="352">Luxembourg +352</option>
                  <option value="853">Macao +853</option>
                  <option value="261">Madagascar +261</option>
                  <option value="265">Malawi +265</option>
                  <option value="60">Malaysia +60</option>
                  <option value="960">Maldives +960</option>
                  <option value="223">Mali +223</option>
                  <option value="356">Malta +356</option>
                  <option value="692">Marshall Islands +692</option>
                  <option value="596">Martinique +596</option>
                  <option value="222">Mauritania +222</option>
                  <option value="230">Mauritius +230</option>
                  <option value="262">Mayotte +262</option>
                  <option value="52">Mexico +52</option>
                  <option value="373">Moldova, Republic of +373</option>
                  <option value="377">Monaco +377</option>
                  <option value="976">Mongolia +976</option>
                  <option value="382">Montenegro +382</option>
                  <option value="1664">Montserrat +1664</option>
                  <option value="212">Morocco +212</option>
                  <option value="258">Mozambique +258</option>
                  <option value="95">Myanmar +95</option>
                  <option value="264">Namibia +264</option>
                  <option value="674">Nauru +674</option>
                  <option value="977">Nepal +977</option>
                  <option value="31">Netherlands +31</option>
                  <option value="599">Netherlands Antilles +599</option>
                  <option value="687">New Caledonia +687</option>
                  <option value="64">New Zealand +64</option>
                  <option value="505">Nicaragua +505</option>
                  <option value="227">Niger +227</option>
                  <option value="234">Nigeria +234</option>
                  <option value="683">Niue +683</option>
                  <option value="672">Norfolk Island +672</option>
                  <option value="1670">Northern Mariana Islands +1670</option>
                  <option value="47">Norway +47</option>
                  <option value="968">Oman +968</option>
                  <option value="92">Pakistan +92</option>
                  <option value="680">Palau +680</option>
                  <option value="970">
                    Palestinian Territory, Occupied +970
                  </option>
                  <option value="507">Panama +507</option>
                  <option value="675">Papua New Guinea +675</option>
                  <option value="595">Paraguay +595</option>
                  <option value="51">Peru +51</option>
                  <option value="63">Philippines +63</option>
                  <option value="64">Pitcairn +64</option>
                  <option value="48">Poland +48</option>
                  <option value="351">Portugal +351</option>
                  <option value="1787">Puerto Rico +1787</option>
                  <option value="974">Qatar +974</option>
                  <option value="262">Reunion +262</option>
                  <option value="40">Romania +40</option>
                  <option value="7">Russian Federation +7</option>
                  <option value="250">Rwanda +250</option>
                  <option value="590">Saint Barthelemy +590</option>
                  <option value="290">Saint Helena +290</option>
                  <option value="1869">Saint Kitts and Nevis +1869</option>
                  <option value="1758">Saint Lucia +1758</option>
                  <option value="590">Saint Martin +590</option>
                  <option value="508">Saint Pierre and Miquelon +508</option>
                  <option value="684">Samoa +684</option>
                  <option value="378">San Marino +378</option>
                  <option value="239">Sao Tome and Principe +239</option>
                  <option value="966">Saudi Arabia +966</option>
                  <option value="221">Senegal +221</option>
                  <option value="381">Serbia +381</option>
                  <option value="381">Serbia and Montenegro +381</option>
                  <option value="248">Seychelles +248</option>
                  <option value="232">Sierra Leone +232</option>
                  <option value="65">Singapore +65</option>
                  <option value="721">Sint Maarten +721</option>
                  <option value="421">Slovakia +421</option>
                  <option value="386">Slovenia +386</option>
                  <option value="677">Solomon Islands +677</option>
                  <option value="252">Somalia +252</option>
                  <option value="27">South Africa +27</option>
                  <option value="34">Spain +34</option>
                  <option value="94">Sri Lanka +94</option>
                  <option value="249">Sudan +249</option>
                  <option value="597">Suriname +597</option>
                  <option value="47">Svalbard and Jan Mayen +47</option>
                  <option value="268">Swaziland +268</option>
                  <option value="46">Sweden +46</option>
                  <option value="41">Switzerland +41</option>
                  <option value="963">Syrian Arab Republic +963</option>
                  <option value="886">Taiwan, Province of China +886</option>
                  <option value="992">Tajikistan +992</option>
                  <option value="255">Tanzania, United Republic of +255</option>
                  <option value="66">Thailand +66</option>
                  <option value="670">Timor-Leste +670</option>
                  <option value="228">Togo +228</option>
                  <option value="690">Tokelau +690</option>
                  <option value="676">Tonga +676</option>
                  <option value="216">Tunisia +216</option>
                  <option value="90">Turkey +90</option>
                  <option value="7370">Turkmenistan +7370</option>
                  <option value="688">Tuvalu +688</option>
                  <option value="256">Uganda +256</option>
                  <option value="380">Ukraine +380</option>
                  <option value="971">United Arab Emirates +971</option>
                  <option value="44">United Kingdom +44</option>
                  <option value="1">United States +1</option>
                  <option value="598">Uruguay +598</option>
                  <option value="998">Uzbekistan +998</option>
                  <option value="678">Vanuatu +678</option>
                  <option value="58">Venezuela +58</option>
                  <option value="84">Viet Nam +84</option>
                  <option value="212">Western Sahara +212</option>
                  <option value="967">Yemen +967</option>
                  <option value="260">Zambia +260</option>
                  <option value="263">Zimbabwe +263</option>
                </select>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number (optional)"
                  className="cursor-target cursor-pointer flex-1 px-4 py-3 bg-black/40 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="cursor-target cursor-pointer w-full pl-10 pr-10 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  className="cursor-target cursor-pointer w-full pl-10 pr-10 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="cursor-target cursor-pointer w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  "Create account"
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </form>
        </div>

        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full opacity-50 blur-sm" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-500 rounded-full opacity-50 blur-sm" />
      </motion.div>
    </div>
  );
};

export default SignUpPage;
